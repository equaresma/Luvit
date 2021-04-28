using com.luvinbox.domain.dtos;
using com.luvinbox.domain.exceptions;
using com.luvinbox.domain.services;
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace com.luvinbox.service.Delivery {
    /// <summary>
    /// Reference: https://www.escoladeecommerce.com/artigos/como-calcular-o-frete-dos-correios/
    /// </summary>
    public class CorreiosShippingService : IShippingService {
        //coeficiente definido conforme padrões internacionais. Trata-se de um fator de cubagem resultante da relação entre peso e volume ideal do pacote (estabelecida pela Entidade Internacional das Empresas Aéreas — IATA
        public readonly int _cubeFactor = 6000;
        //10Kg
        public readonly int _weigthFactor = 10;
        //SEDEX à vista
        public const string _defaultService = "04510";

        public async Task<DeliveryDTO> Calculate(ShippingDTO instance) {
            if (instance == null)
                throw new BusinessException("Shipping cannot be null");

            //calculate cubic weigth
            if (instance.Dimension.Weigth == 0 || instance.Dimension.Weigth > _weigthFactor) {
                instance.Dimension.Weigth = (instance.Dimension.Length * instance.Dimension.Width * instance.Dimension.Height) / _cubeFactor;
            }

            await ObterFrete(instance, _defaultService);
            var delivery = new DeliveryDTO() {
                Deadline = instance.Deadline,
                Shipping = instance.Value
            };

            return delivery;
        }

        private async Task ObterFrete(ShippingDTO instance, string defaultServiceCode) {
            var url = GetURL(instance, defaultServiceCode);
            var client = new HttpClient();
            var response = await client.GetAsync(url);

            if (response.StatusCode == System.Net.HttpStatusCode.OK) {
                //read xml
                var returnedXML = new XmlDocument();
                returnedXML.LoadXml(await response.Content.ReadAsStringAsync());

                int.TryParse(returnedXML.DocumentElement.SelectSingleNode("//Servicos/cServico/Erro").InnerText, out int res);

                //ocorreu erro
                if (res != 0) {
                    throw new BusinessException(
                        $"Getting from Correios.com returned error code: {res} - message: {returnedXML.DocumentElement.SelectSingleNode("//Servicos/cServico/MsgErro").InnerText}");
                }

                short.TryParse(returnedXML.DocumentElement.SelectSingleNode("//Servicos/cServico/PrazoEntrega").InnerText, out short deadline);
                decimal.TryParse(returnedXML.DocumentElement.SelectSingleNode("//Servicos/cServico/Valor").InnerText, out decimal value);

                instance.Deadline = deadline;
                instance.Value = value;
            } else {
                throw new BusinessException("Error trying get from Correios.com " + response.Content);
            }
        }
        private string GetURL(ShippingDTO instance, string defaultServiceCode) {
            var query = new StringBuilder();

            query.Append("http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx");
            query.Append("?nCdEmpresa=&sDsSenha=");
            query.Append($"&sCepOrigem={instance.ZipCodeOrigin}");
            query.Append($"&sCepDestino={instance.ZipCodeDestiny}");
            query.Append($"&nVlPeso={Math.Max(0.5, instance.Dimension.Weigth)}");
            query.Append("&nCdFormato=1");
            query.Append($"&nVlComprimento={Math.Max(0.5, instance.Dimension.Length)}");
            query.Append($"&nVlAltura={Math.Max(0.5, instance.Dimension.Height)}");
            query.Append($"&nVlLargura={Math.Max(0.5, instance.Dimension.Width)}");
            query.Append("&sCdMaoPropria=n");
            query.Append("&nVlValorDeclarado=0");
            query.Append("&sCdAvisoRecebimento=n");
            query.Append($"&nCdServico={defaultServiceCode}");
            query.Append("&nVlDiametro=0");
            query.Append("&StrRetorno=xml");

            return query.ToString();
        }
    }
}

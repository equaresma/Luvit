using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Threading.Tasks;
using com.luvinbox.model;

namespace com.luvinbox.service
{
    public abstract class ServiceAbs<T, K> : IService<T, K> where T : IEntity<K>
    {
        private HttpClient _client = new HttpClient();
        private string mType;
        private string mUri;

        public ServiceAbs(string uri)
        {
            mType = typeof(T).Name;
            mUri = $"{uri}/api/{mType}";

            _client.BaseAddress = new Uri(uri);
            _client.DefaultRequestHeaders.Accept.Clear();
            _client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));
        }

        public async Task<bool> Delete(K id)
        {
            string sId = id.ToString();
            HttpResponseMessage response = await _client.DeleteAsync($"{mUri}/{sId}");
            return (response.StatusCode == HttpStatusCode.OK);
        }
        public async Task<IEnumerable<T>> Get()
        {
            HttpResponseMessage response = await _client.GetAsync($"{mUri}/");
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsAsync<IEnumerable<T>>();
            }
            else
            {
                return new List<T>();
            }
        }
        public async Task<T> Get(K id)
        {
            T instance = default(T);
            HttpResponseMessage response = await _client.GetAsync($"{mUri}/" + id.ToString());
            if (response.IsSuccessStatusCode)
            {
                instance = await response.Content.ReadAsAsync<T>();
            }

            return instance;
        }
        public async Task<bool> Save(T instance)
        {
            if (instance != null)
            {
                K mid = instance.Id;
                if (EqualityComparer<K>.Default.Equals(mid, default))
                    await CreateAsync(instance);
                else
                    await UpdateAsync(instance);
            }
            else
                throw new ArgumentNullException("Entity is null");

            return true;
        }

        private async Task<T> CreateAsync(T instance)
        {
            HttpResponseMessage response = await _client.PostAsJsonAsync($"{mUri}/{instance.Id}", instance);
            response.EnsureSuccessStatusCode();

            // Deserialize the updated product from the response body.
            instance = await response.Content.ReadAsAsync<T>();
            return instance;
        }
        private async Task<T> UpdateAsync(T instance)
        {
            HttpResponseMessage response = await _client.PutAsJsonAsync($"{mUri}/{instance.Id}", instance);
            response.EnsureSuccessStatusCode();

            // Deserialize the updated product from the response body.
            instance = await response.Content.ReadAsAsync<T>();
            return instance;
        }
    }
}

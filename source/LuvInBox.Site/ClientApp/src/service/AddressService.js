"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var addressService = /** @class */ (function () {
    function addressService() {
    }
    addressService.prototype.getAddressByCEP = function (zipCode) {
        //Nova variável "cep" somente com dígitos.
        var cep = zipCode.replace(/\D/g, '');
        var url = "//viacep.com.br/ws/" + cep + "/json/?callback=?";
        return axios_1.default.get(url);
    };
    return addressService;
}());
exports.default = addressService;
//# sourceMappingURL=addressService.js.map
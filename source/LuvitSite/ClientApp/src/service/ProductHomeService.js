"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var ProductHomeService = /** @class */ (function () {
    function ProductHomeService() {
    }
    ProductHomeService.prototype.getProductsSmall = function () {
        return axios_1.default.get('data/products.json').then(function (res) { return res.data.data; });
    };
    ProductHomeService.prototype.getProducts = function () {
        return axios_1.default.get('data/products.json').then(function (res) { return res.data.data; });
    };
    ProductHomeService.prototype.getProductsWithOrdersSmall = function () {
        return axios_1.default.get('data/products.json').then(function (res) { return res.data.data; });
    };
    return ProductHomeService;
}());
exports.default = ProductHomeService;
//# sourceMappingURL=ProductHomeService.js.map
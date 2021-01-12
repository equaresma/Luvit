"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var ProductHomeService = /** @class */ (function () {
    function ProductHomeService() {
    }
    ProductHomeService.prototype.getProductsSmall = function () {
        return axios_1.default.get('api/product');
    };
    ProductHomeService.prototype.getProducts = function () {
        return axios_1.default.get('api/product');
    };
    ProductHomeService.prototype.getProductsWithOrdersSmall = function () {
        return axios_1.default.get('api/product');
    };
    return ProductHomeService;
}());
exports.default = ProductHomeService;
//# sourceMappingURL=ProductHomeService.js.map
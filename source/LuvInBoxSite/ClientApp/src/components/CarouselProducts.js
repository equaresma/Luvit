"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselProducts = void 0;
var React = require("react");
var react_1 = require("react");
var carousel_1 = require("primereact/carousel");
var button_1 = require("primereact/button");
var ProductHomeService_1 = require("../service/ProductHomeService");
require("./Carousel.css");
var CarouselProducts = function () {
    var _a = react_1.useState([]), products = _a[0], setProducts = _a[1];
    var responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    var productService = new ProductHomeService_1.default();
    react_1.useEffect(function () {
        setProducts(productService.getProductsSmall().products.slice(0, 9));
        //.then(data => setProducts(Array(data).slice(0, 9)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    var productTemplate = function (product) {
        console.log(product.name);
        return (React.createElement("div", { className: "product-item" },
            React.createElement("div", { className: "product-item-content" },
                React.createElement("div", { className: "p-mb-3 whiteCard" },
                    React.createElement("img", { src: 'showcase/demo/images/product/${product.image}', alt: product.name, className: "product-image" })),
                React.createElement("div", { className: "whiteCard" },
                    React.createElement("h4", { className: "p-mb-1" }, product.name),
                    React.createElement("h6", { className: "p-mt-0 p-mb-3" },
                        "$",
                        product.price),
                    React.createElement("span", { className: "product-badge status-" + product.inventoryStatus }, product.inventoryStatus),
                    React.createElement("div", { className: "car-buttons p-mt-5" },
                        React.createElement(button_1.Button, { icon: "pi pi-search", className: "p-button p-button-rounded p-mr-2" }),
                        React.createElement(button_1.Button, { icon: "pi pi-star", className: "p-button-success p-button-rounded p-mr-2" }),
                        React.createElement(button_1.Button, { icon: "pi pi-cog", className: "p-button-help p-button-rounded" }))))));
    };
    return (React.createElement("div", { className: "redCard" },
        React.createElement(carousel_1.Carousel, { value: products, numVisible: 3, numScroll: 1, responsiveOptions: responsiveOptions, className: "custom-carousel", circular: true, autoplayInterval: 3000, itemTemplate: productTemplate, header: React.createElement("div", { className: "carouselTitle" },
                React.createElement("h5", null, "Destaques")) })));
};
exports.CarouselProducts = CarouselProducts;
//# sourceMappingURL=CarouselProducts.js.map
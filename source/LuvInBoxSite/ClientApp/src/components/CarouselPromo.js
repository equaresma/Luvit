"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselPromo = void 0;
var React = require("react");
var react_1 = require("react");
var carousel_1 = require("primereact/carousel");
require("./CarouselPromo.css");
var CarouselPromo = function () {
    var _a = react_1.useState([]), promos = _a[0], setPromos = _a[1];
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
    react_1.useEffect(function () {
        setPromos(['manifesto.jpg', 'promocao-frete.jpg', 'promocao-verao.jpg']);
    }, []);
    var productTemplate = function (promo) {
        return (React.createElement("div", { className: "promo-item" },
            React.createElement("div", { className: "promo-item-content" },
                React.createElement("div", { className: "p-mb-3 whiteCard" },
                    React.createElement("img", { src: "/images/promotional/" + promo, alt: promo, className: "promo-image" })))));
    };
    return (React.createElement("div", { className: "container-fluid" },
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "card" },
                React.createElement(carousel_1.Carousel, { value: promos, numVisible: 1, numScroll: 1, responsiveOptions: responsiveOptions, className: "custom-carousel", circular: true, autoplayInterval: 6000, itemTemplate: productTemplate })))));
};
exports.CarouselPromo = CarouselPromo;
//# sourceMappingURL=CarouselPromo.js.map
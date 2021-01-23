"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("primeicons/primeicons.css");
require("primereact/resources/themes/saga-blue/theme.css");
require("primereact/resources/primereact.css");
require("primeflex/primeflex.css");
require("./Home.css");
var React = require("react");
var react_redux_1 = require("react-redux");
var CarouselProducts_1 = require("./CarouselProducts");
var Home = function () {
    return (React.createElement("div", { className: "containerCarouselCnt" },
        React.createElement(CarouselProducts_1.CarouselProducts, null)));
};
exports.default = react_redux_1.connect()(Home);
//# sourceMappingURL=Home.js.map
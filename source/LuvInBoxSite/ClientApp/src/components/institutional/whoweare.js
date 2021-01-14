"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var react_i18next_1 = require("react-i18next");
var WhoWeAre = /** @class */ (function (_super) {
    __extends(WhoWeAre, _super);
    function WhoWeAre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // This method is called when the component is first added to the document
    WhoWeAre.prototype.componentDidMount = function () {
    };
    // This method is called when the route parameters change
    WhoWeAre.prototype.componentDidUpdate = function () {
    };
    WhoWeAre.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", { id: "tabelLabel" },
                React.createElement(react_i18next_1.Trans, null, "who_wew_are_titile"))));
    };
    return WhoWeAre;
}(React.PureComponent));
exports.default = react_redux_1.connect()(WhoWeAre);
//# sourceMappingURL=whoweare.js.map
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
var reactstrap_1 = require("reactstrap");
var react_router_dom_1 = require("react-router-dom");
var inputtext_1 = require("primereact/inputtext");
var react_i18next_1 = require("react-i18next");
require("./navMenu.css");
var NavMenu = /** @class */ (function (_super) {
    __extends(NavMenu, _super);
    function NavMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: false,
            search: ''
        };
        _this.toggle = function () {
            _this.setState({
                isOpen: !_this.state.isOpen
            });
        };
        return _this;
    }
    NavMenu.prototype.render = function () {
        var t = this.props.t;
        return (React.createElement("header", null,
            React.createElement(reactstrap_1.Navbar, { className: "navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3", light: true },
                React.createElement(reactstrap_1.Container, null,
                    React.createElement(reactstrap_1.NavbarBrand, { tag: react_router_dom_1.Link, to: "/" },
                        React.createElement("img", { src: "/logo.png", className: "siteLogo" })),
                    React.createElement(reactstrap_1.Nav, null,
                        React.createElement("form", { className: "mx-2 my-auto d-inline w-100" },
                            React.createElement("div", { className: "input-group" },
                                React.createElement("span", { className: "p-input-icon-right" },
                                    React.createElement("i", { className: "pi pi-search" }),
                                    React.createElement(inputtext_1.InputText, { defaultValue: this.state.search, placeholder: t('search'), className: "form-control" }))))),
                    React.createElement(reactstrap_1.NavbarToggler, { onClick: this.toggle, className: "mr-2" }),
                    React.createElement(reactstrap_1.Collapse, { className: "d-sm-inline-flex flex-sm-row-reverse", isOpen: this.state.isOpen, navbar: true },
                        React.createElement("ul", { className: "navbar-nav flex-grow" },
                            React.createElement(reactstrap_1.NavItem, null,
                                React.createElement(reactstrap_1.NavLink, { className: "footLnk", href: "/" },
                                    React.createElement("i", { className: "pi pi-home" }))),
                            React.createElement(reactstrap_1.NavItem, null,
                                React.createElement(reactstrap_1.NavLink, { className: "footLnk", href: "/account/login" },
                                    React.createElement("i", { className: "pi pi-user" }))),
                            React.createElement(reactstrap_1.NavItem, null,
                                React.createElement(reactstrap_1.NavLink, { className: "footLnk", href: "#" },
                                    React.createElement("i", { className: "pi pi-shopping-cart" })))))))));
    };
    return NavMenu;
}(React.PureComponent));
exports.default = react_i18next_1.withTranslation()(NavMenu);
//# sourceMappingURL=NavMenu.js.map
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
var react_i18next_1 = require("react-i18next");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var NavFooter = /** @class */ (function (_super) {
    __extends(NavFooter, _super);
    function NavFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavFooter.prototype.render = function () {
        return (React.createElement("footer", { id: "footer" },
            React.createElement("div", { className: "footer-fluid container-fluid" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { id: "first_footer", className: "col-md-4" },
                            React.createElement(reactstrap_1.Nav, { vertical: true },
                                React.createElement(reactstrap_1.NavItem, null,
                                    React.createElement(reactstrap_1.NavLink, { className: "footLnk", href: "/institutional/whoweare" },
                                        React.createElement(react_i18next_1.Trans, null, "footer_who_wew_are"))),
                                React.createElement(reactstrap_1.NavItem, null,
                                    React.createElement(reactstrap_1.NavLink, { className: "footLnk", href: "#" },
                                        React.createElement(react_i18next_1.Trans, null, "footer_privacy_policy"))),
                                React.createElement(reactstrap_1.NavItem, null,
                                    React.createElement(reactstrap_1.NavLink, { className: "footLnk", href: "#" },
                                        React.createElement(react_i18next_1.Trans, null, "footer_return_policy"))))),
                        React.createElement("div", { id: "secound_footer", className: "col-md-4" },
                            React.createElement(reactstrap_1.Nav, { vertical: true },
                                React.createElement(reactstrap_1.NavItem, null,
                                    React.createElement(reactstrap_1.NavLink, { className: "footLnk", href: "#" }, "FAQ")),
                                React.createElement(reactstrap_1.NavItem, null,
                                    React.createElement(reactstrap_1.NavLink, { className: "footLnk", href: "#" },
                                        React.createElement(react_i18next_1.Trans, null, "footer_contact_us"))),
                                React.createElement(reactstrap_1.NavItem, null,
                                    React.createElement(reactstrap_1.NavLink, { className: "footLnk", href: "#" },
                                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: ['fab', 'whatsapp'] }),
                                        "\u00A0WhatsApp")))),
                        React.createElement("div", { id: "third_footer", className: "col-md-4" },
                            React.createElement(reactstrap_1.Nav, { vertical: true },
                                React.createElement(reactstrap_1.NavItem, null,
                                    React.createElement(reactstrap_1.NavLink, { className: "footLnk", href: "#" },
                                        React.createElement(react_i18next_1.Trans, null, "footer_be_vendor"))),
                                React.createElement(reactstrap_1.NavItem, null,
                                    React.createElement(reactstrap_1.NavLink, { className: "footLnk", href: "#" },
                                        React.createElement(react_i18next_1.Trans, null, "footer_vendors_area"))),
                                React.createElement(reactstrap_1.NavItem, null,
                                    React.createElement(reactstrap_1.NavLink, { className: "footLnk", href: "#" }, "FAQ"))))),
                    React.createElement("div", { className: "row", style: { marginTop: "25px", marginBottom: "25px" } },
                        React.createElement("div", { className: "col-md-4" }),
                        React.createElement("div", { className: "col-md-4 center" },
                            React.createElement(reactstrap_1.Nav, null,
                                React.createElement(reactstrap_1.NavItem, null,
                                    React.createElement(reactstrap_1.NavLink, { className: "footLnk", href: "#" },
                                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: ['fab', 'facebook'] }))),
                                React.createElement(reactstrap_1.NavItem, null,
                                    React.createElement(reactstrap_1.NavLink, { className: "footLnk", href: "#" },
                                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: ['fab', 'instagram'] }))),
                                React.createElement(reactstrap_1.NavItem, null,
                                    React.createElement(reactstrap_1.NavLink, { className: "footLnk", href: "#" },
                                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: ['fab', 'youtube'] }))),
                                React.createElement(reactstrap_1.NavItem, null,
                                    React.createElement(reactstrap_1.NavLink, { className: "footLnk", href: "#" },
                                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: ['fab', 'twitter'] }))))),
                        React.createElement("div", { className: "col-md-4" })),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-4" }),
                        React.createElement("div", { className: "col-md-4" }),
                        React.createElement("div", { className: "col-md-4" }))))));
    };
    return NavFooter;
}(React.PureComponent));
exports.default = NavFooter;
//# sourceMappingURL=NavFooter.js.map
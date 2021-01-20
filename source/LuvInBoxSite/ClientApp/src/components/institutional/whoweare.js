"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhoWeAre = void 0;
var React = require("react");
var react_i18next_1 = require("react-i18next");
var WhoWeAre = function () {
    var t = react_i18next_1.useTranslation().t;
    var showMe = function (m) {
        alert(t(m));
    };
    return (React.createElement("div", null,
        React.createElement("h1", { id: "tabelLabel" },
            React.createElement(react_i18next_1.Trans, null, "who_wew_are_titile")),
        React.createElement("input", { type: "button", id: "tabelLabel", onClick: function () { return showMe('who_wew_are_titile'); }, value: "Teste" })));
};
exports.WhoWeAre = WhoWeAre;
//# sourceMappingURL=whoweare.js.map
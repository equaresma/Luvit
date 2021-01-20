"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reactstrap_1 = require("reactstrap");
var NavMenu_1 = require("./NavMenu");
var NavFooter_1 = require("./NavFooter");
//import '../../node_modules/primereact/resources/primereact.css';
exports.default = (function (props) { return (React.createElement(React.Fragment, null,
    React.createElement(NavMenu_1.default, null),
    React.createElement(reactstrap_1.Container, null, props.children),
    React.createElement(NavFooter_1.default, null))); });
//# sourceMappingURL=Layout.js.map
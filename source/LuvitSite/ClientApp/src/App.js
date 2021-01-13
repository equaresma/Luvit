"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var Layout_1 = require("./components/Layout");
var Home_1 = require("./components/Home");
var Counter_1 = require("./components/Counter");
var FetchData_1 = require("./components/FetchData");
var whoweare_1 = require("./components/institutional/whoweare");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
fontawesome_svg_core_1.library.add(free_brands_svg_icons_1.fab, free_solid_svg_icons_1.faCheckSquare, free_solid_svg_icons_1.faCoffee);
require("./custom.css");
exports.default = (function () { return (React.createElement(Layout_1.default, null,
    React.createElement(react_router_1.Route, { exact: true, path: '/', component: Home_1.default }),
    React.createElement(react_router_1.Route, { path: '/counter', component: Counter_1.default }),
    React.createElement(react_router_1.Route, { path: '/fetch-data/:startDateIndex?', component: FetchData_1.default }),
    React.createElement(react_router_1.Route, { path: '/institutional/whoweare', component: whoweare_1.default }))); });
//# sourceMappingURL=App.js.map
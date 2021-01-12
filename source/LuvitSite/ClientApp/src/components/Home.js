"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("primeicons/primeicons.css");
require("primereact/resources/themes/saga-blue/theme.css");
require("primereact/resources/primereact.css");
require("primeflex/primeflex.css");
var React = require("react");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var dataview_1 = require("primereact/dataview");
var button_1 = require("primereact/button");
var dropdown_1 = require("primereact/dropdown");
var ProductHomeService_1 = require("../service/ProductHomeService");
var rating_1 = require("primereact/rating");
require("./Home.css");
var Home = function () {
    var _a = react_1.useState(null), products = _a[0], setProducts = _a[1];
    var _b = react_1.useState('grid'), layout = _b[0], setLayout = _b[1];
    var _c = react_1.useState(null), sortKey = _c[0], setSortKey = _c[1];
    var _d = react_1.useState(null), sortOrder = _d[0], setSortOrder = _d[1];
    var _e = react_1.useState(null), sortField = _e[0], setSortField = _e[1];
    var sortOptions = [
        { label: 'Price High to Low', value: '!price' },
        { label: 'Price Low to High', value: 'price' },
    ];
    var productService = new ProductHomeService_1.default();
    react_1.useEffect(function () {
        productService.getProducts().then(function (data) { return setProducts(data); });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    var onSortChange = function (event) {
        var value = event.value;
        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        }
        else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    };
    var renderListItem = function (data) {
        return (React.createElement("div", { className: "p-col-12" },
            React.createElement("div", { className: "product-list-item" },
                React.createElement("img", { src: "showcase/demo/images/product/" + data.image, alt: data.name }),
                React.createElement("div", { className: "product-list-detail" },
                    React.createElement("div", { className: "product-name" }, data.name),
                    React.createElement("div", { className: "product-description" }, data.description),
                    React.createElement(rating_1.Rating, { value: data.rating, readonly: true, cancel: false }),
                    React.createElement("i", { className: "pi pi-tag product-category-icon" }),
                    React.createElement("span", { className: "product-category" }, data.category)),
                React.createElement("div", { className: "product-list-action" },
                    React.createElement("span", { className: "product-price" },
                        "$",
                        data.price),
                    React.createElement(button_1.Button, { icon: "pi pi-shopping-cart", label: "Add to Cart", disabled: data.inventoryStatus === 'OUTOFSTOCK' }),
                    React.createElement("span", { className: "product-badge status-" + data.inventoryStatus.toLowerCase() }, data.inventoryStatus)))));
    };
    var renderGridItem = function (data) {
        return (React.createElement("div", { className: "p-col-12 p-md-4" },
            React.createElement("div", { className: "product-grid-item card" },
                React.createElement("div", { className: "product-grid-item-top" },
                    React.createElement("div", null,
                        React.createElement("i", { className: "pi pi-tag product-category-icon" }),
                        React.createElement("span", { className: "product-category" }, data.category)),
                    React.createElement("span", { className: "product-badge status-" + data.inventoryStatus.toLowerCase() }, data.inventoryStatus)),
                React.createElement("div", { className: "product-grid-item-content" },
                    React.createElement("img", { src: "showcase/demo/images/product/" + data.image, alt: data.name }),
                    React.createElement("div", { className: "product-name" }, data.name),
                    React.createElement("div", { className: "product-description" }, data.description),
                    React.createElement(rating_1.Rating, { value: data.rating, readonly: true, cancel: false })),
                React.createElement("div", { className: "product-grid-item-bottom" },
                    React.createElement("span", { className: "product-price" },
                        "$",
                        data.price),
                    React.createElement(button_1.Button, { icon: "pi pi-shopping-cart", label: "Add to Cart", disabled: data.inventoryStatus === 'OUTOFSTOCK' })))));
    };
    var itemTemplate = function (product, layout) {
        if (!product) {
            return;
        }
        if (layout === 'list')
            return renderListItem(product);
        else if (layout === 'grid')
            return renderGridItem(product);
    };
    var renderHeader = function () {
        return (React.createElement("div", { className: "p-grid p-nogutter" },
            React.createElement("div", { className: "p-col-6", style: { textAlign: 'left' } },
                React.createElement(dropdown_1.Dropdown, { options: sortOptions, value: sortKey, optionLabel: "label", placeholder: "Sort By Price", onChange: onSortChange })),
            React.createElement("div", { className: "p-col-6", style: { textAlign: 'right' } },
                React.createElement(dataview_1.DataViewLayoutOptions, { layout: layout, onChange: function (e) { return setLayout(e.value); } }))));
    };
    var header = renderHeader();
    return (React.createElement("div", { className: "dataview-demo" },
        React.createElement("div", { className: "card" },
            React.createElement(dataview_1.DataView, { value: products, layout: layout, header: header, itemTemplate: itemTemplate, paginator: true, rows: 9, sortOrder: sortOrder, sortField: sortField }))));
};
//const Home = () => (
//    <div>
//        <h1>Hello, world!</h1>
//        <p>Welcome to your new single-page application, built with:</p>
//        <ul>
//            <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
//            <li><a href='https://facebook.github.io/react/'>React</a> and <a href='https://redux.js.org/'>Redux</a> for client-side code</li>
//            <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
//        </ul>
//        <p>To help you get started, we've also set up:</p>
//        <ul>
//            <li><strong>Client-side navigation</strong>.For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
//            <li><strong>Development server integration</strong>.In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
//            <li><strong>Efficient production builds</strong>.In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
//        </ul>
//        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template.If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
//    </div>
//);
exports.default = react_redux_1.connect()(Home);
//# sourceMappingURL=Home.js.map
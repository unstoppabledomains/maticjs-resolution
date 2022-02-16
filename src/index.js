"use strict";
exports.__esModule = true;
exports.UnstoppableDomainsClientPlugin = void 0;
var resolution_1 = require("@unstoppabledomains/resolution");
var UnstoppableDomainsClientPlugin = /** @class */ (function () {
    function UnstoppableDomainsClientPlugin() {
    }
    UnstoppableDomainsClientPlugin.prototype.setup = function (matic) {
        matic.utils.UnstoppableDomains = new resolution_1["default"]();
        console.log('setup matic', matic);
    };
    return UnstoppableDomainsClientPlugin;
}());
exports.UnstoppableDomainsClientPlugin = UnstoppableDomainsClientPlugin;
// console.log(UnstoppableDomainsClientPlugin, Resolution)
exports["default"] = UnstoppableDomainsClientPlugin;

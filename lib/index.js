"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnstoppableDomainsClientPlugin = void 0;
var resolution_1 = __importDefault(require("@unstoppabledomains/resolution"));
var UnstoppableDomainsClientPlugin = (function () {
    function UnstoppableDomainsClientPlugin() {
    }
    UnstoppableDomainsClientPlugin.prototype.setup = function (matic) {
        matic.utils.UnstoppableDomains = new resolution_1.default();
    };
    return UnstoppableDomainsClientPlugin;
}());
exports.UnstoppableDomainsClientPlugin = UnstoppableDomainsClientPlugin;
exports.default = UnstoppableDomainsClientPlugin;
//# sourceMappingURL=index.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var product_module_1 = require("./products/product.module");
var welcome_component_1 = require("./home/welcome.component");
var appRouting_module_1 = require("./appRouting.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, product_module_1.ProductModule, appRouting_module_1.AppRoutingModule],
        declarations: [app_component_1.AppComponent, welcome_component_1.WelcomeComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
// notes, app module manages the app as a whole, the app module should be small and we should use other modules. 
// BrowserModule is normally in this module since it is needed almost everywhere
// routes for general pages are also everywhere
// we then import feature modules ( in our case productModle)
// we then decalare the component of this module, in this case the appComp and Welcomecomp only as we moved productComp to different feature module
// for future, we can create 
//# sourceMappingURL=app.module.js.map
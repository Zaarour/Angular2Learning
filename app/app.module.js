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
//summary
/*
- Every app should contain a root app module, this is normally what bootstraps AppComponent
-A very good way of organising the app is to have feature modules, like product module, customer module etc.
- Shared stuff belongs to one ore more sharedModules which normally used exports
- if you have services that should be up and running at the begning of the app, consider defining a core module that runs first, be sure it is imported once in app module (providers live here)
- Routed can be refactored in their own modules


In general, NgModule meta data contains the following:
- Boostrap: contains startup components, normally appModule only has this and other modules don't
- Declarations : What belongs to this module, components ,pipes etc.
- Export : what need to be exported to the module that imports this module
- Import: what this module needs
- Providers: lists the service providers, these providers are registerd in angular root injector to be available everywhere in the app

 */ 
//# sourceMappingURL=app.module.js.map
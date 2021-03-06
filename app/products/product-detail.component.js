"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var router_1 = require("@angular/router"); // this service is to read values of parameters in routes
var router_2 = require("@angular/router");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_route, _router, _productService) {
        this._route = _route;
        this._router = _router;
        this._productService = _productService;
        this.pageTitle = 'Product details';
        this.errorMessage = '';
        console.log(this._route.snapshot.params['id']); // this will get the id from the route
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._route.snapshot.params['id']; // the plus is js shortcut to convert a string to numeric
        this.pageTitle += " :" + id; //es 2015 template string
        this._productService.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(["/products"]);
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/products/product-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.Router, product_service_1.ProductService])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map
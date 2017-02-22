import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service'
import { ActivatedRoute } from '@angular/router'; // this service is to read values of parameters in routes
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {


    pageTitle: string = 'Product details'
    product: IProduct;
    errorMessage: string = '';
    constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) {
        console.log(this._route.snapshot.params['id']);// this will get the id from the route
    }



    ngOnInit(): void {
        let id = +this._route.snapshot.params['id']; // the plus is js shortcut to convert a string to numeric
        this.pageTitle += ` :${id}`; //es 2015 template string
        this._productService.getProduct(id).subscribe(product => this.product = product, error => this.errorMessage = <any>error);
    }


    onBack(): void {
        this._router.navigate(["/products"]);
    }
}
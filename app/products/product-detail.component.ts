import  {Component,OnInit} from '@angular/core';
import {IProduct} from './product'
import {ActivatedRoute} from '@angular/router' // this service is to read values of parameters in routes

@Component({
templateUrl:'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{


    pageTitle:string='Product details'
    product:IProduct;

    constructor(private _route:ActivatedRoute){
        //console.log(this._route.snapshot.params['id']);// this will get the id from the route
    }


    ngOnInit():void{
            let id= +this._route.snapshot.params['id']; // the plus is js shortcut to convert a string to numeric
            this.pageTitle +=   ` :${id}`; //es 2015 template string
    }


}
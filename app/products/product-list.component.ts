

import {Component,OnInit} from "@angular/core";
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
moduleId:module.id,
templateUrl: 'product-list.component.html',
styleUrls:['product-list.component.css']
})

export class ProductListComponent implements OnInit{

    constructor(private _productService:ProductService){
    }


    pageTitle:string="Product List";
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    listFilter:string;
    errorMessage:string;
    products:IProduct[];

    ngOnInit():void{

        // here we subscribe to the product service and it works async. COOOL! 
      this._productService.getProducts().subscribe(products=>this.products=products, error=>this.errorMessage=<any>error);
    }

    toggleImage ():void{
        this.showImage=!this.showImage;
    }

    onRatingClicked(message:string):void{
        this.pageTitle='Product List: '+message;
    }

}


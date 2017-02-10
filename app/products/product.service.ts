import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { IProduct } from './product'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

@Injectable()
export class ProductService {

    private _productServiceUrl = 'api/products/products.json';

    constructor(private _http: Http) { }


    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productServiceUrl).map((response: Response) => <IProduct[]>response.json())
        .do(data=>console.log('All'+ JSON.stringify(data)))
        .catch(this.handleError);
    } 


    handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error||'Server Error');
    }
}
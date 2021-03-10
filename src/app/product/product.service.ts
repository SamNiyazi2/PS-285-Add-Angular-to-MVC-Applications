

// 03/09/2021 06:32 pm - SSN - [20210309-1828] - [002] - M04-06 - Creating the product and product service classes
// 03/10/2021 02:31 pm - SSN - [20210310-1429] - [001] - M05-08 - Modify product service to call search web API


import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from './product';
import { ProductSearch } from './productSearch';

@Injectable()
export class ProductService {

    private url = '/api/productApi';

    constructor(private http: Http) {
    }


    getProducts(): Observable<Product[]> {

        return this.http.get(this.url).map(this.extractData).catch(this.handleErrors);

    }



    search(searchEntity: ProductSearch): Observable<Product[]> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url + '/search', searchEntity, options).map(this.extractData).catch(this.handleErrors);

    }


    addProduct(product: Product): Observable<Product> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, product, options).map(this.extractData).catch(this.handleErrors);

    }


    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }


    private handleErrors(error: any): Observable<any> {

        let errors: string[] = [];


        switch (error.status) {


            case 400:
                let err = error.json();

                if (err.modelState) {

                    let valErrors1 = error.json().modelState;
                    let valErrors2 = err.modelState;

                    for (var key in valErrors1) {
                        for (var i = 0; i < valErrors1[key].length; i++) {
                            errors.push(valErrors1[key][i]);
                        }
                    }

                    for (var key in valErrors2) {
                        for (var i = 0; i < valErrors2[key].length; i++) {
                            errors.push(valErrors2[key][i]);
                        }
                    }


                } else
                    if (err.message) {
                        errors.push('[err-ssn-20210309-1934-A]: ' + err.message);
                    }
                    else {
                        error.push('[err-ssn-20210309-1934-B]: ' + 'An Unknown error occurred.');
                    }
                break;


            case 404:
                errors.push('No product data is available');
                break;


            case 500:
                errors.push('[err-ssn-20210309-1934-C]: ' + error.json().exceptionMessage);
                break;


            default:
                error.push('[err-ssn-20210309-1934-D]: Status: ' + error.status + ' - Error message: ' + error.statusText);
        }


        console.error('An error occurred', errors);

        return Observable.throw(errors);

    }

}


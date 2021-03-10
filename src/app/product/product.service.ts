

// 03/09/2021 06:32 pm - SSN - [20210309-1828] - [002] - M04-06 - Creating the product and product service classes


import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from './product';

@Injectable()
export class ProductService {

    private url = '/api/productApi';

    constructor(private http: Http) {
    }


    getProducts(): Observable<Product[]> {

        return this.http.get(this.url).map(this.extractData).catch(this.handleErrors);

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


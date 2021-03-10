

// 03/09/2021 06:32 pm - SSN - [20210309-1828] - [002] - M04-06 - Creating the product and product service classes


import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

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

        // Todo

        console.error('An error occurred', errors);

        return Observable.throw(errors);

    }

}


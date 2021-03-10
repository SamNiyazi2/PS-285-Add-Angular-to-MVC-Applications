
// 03/10/2021 01:08 pm - SSN - [20210310-1305] - [002] - M05-04 - Create category classes to call web API

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Category } from './category';

@Injectable()
export class CategoryService {

    private url = '/api/CategoryApi';

    constructor(private http: Http) {

    }


    getCategories(): Observable<Category[]> {

        return this.http.get(this.url).map(this.extractData).catch(this.handleErrors);

    }

    getSearchCategories(): Observable<Category[]> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url + '/SearchCategories', null, options).map(this.extractData).catch(this.handleErrors);

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
                    errors.push('[err-ssn-20210310-1320-A]: ' + err.message);
                }
                else {
                    error.push('[err-ssn-20210310-1320-B]: ' + 'An Unknown error occurred.');
                }
                break;


            case 404:
                errors.push('No product data is available');
                break;


            case 500:
                errors.push('[err-ssn-20210310-1320-C]: ' + error.json().exceptionMessage);
                break;


            default:
                error.push('[err-ssn-20210310-1320-D]: Status: ' + error.status + ' - Error message: ' + error.statusText);
        }


        console.error('[20210310-1320] An error occurred', errors);

        return Observable.throw(errors);

    }


}



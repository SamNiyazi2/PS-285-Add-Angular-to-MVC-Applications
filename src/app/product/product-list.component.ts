
// 03/09/2021 04:10 pm - SSN - [20210309-1551] - [001] - M03-06 - Add product list component and HTML

import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';



@Component({

    templateUrl: './product-list.component.html',

})
export class ProductListComponent implements OnInit {


    constructor(private productService: ProductService) {

    }


    ngOnInit(): void {
        this.getProducts();
    }


    products: Product[] = [];
    messages: string[] = [];


    private getProducts() {

        this.productService.getProducts().subscribe(products => this.products = products, errors => this.handleErrors(errors));

    };


    private handleErrors(errors: any) {

        this.messages = [];

        for (let msg of errors) {
            this.messages.push(msg);
        }

    }



}
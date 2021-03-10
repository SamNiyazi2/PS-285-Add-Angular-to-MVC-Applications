
// 03/10/2021 04:12 pm - SSN - [20210310-1611] - [001] - M06-03 - Create product detail component classdetail component clas

import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/category';

@Component({

    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

    product: Product;
    messages: string[] = [];

    categories: Category[] = [];


    constructor(private categoryService: CategoryService) {

    }


    ngOnInit(): void {

        this.product = new Product();
        this.product.price = 0;
        this.product.categoryId = 0;
        this.product.url = "http://www.fairwaytech.com";

        this.getCategories();

    }


    getCategories() {

        this.categoryService.getCategories().subscribe(categories => this.categories = categories, errors => this.handleErrors(errors));
    }



    private handleErrors(errors: any) {

        for (let msg of errors) {
            this.messages.push(msg);
        }
    }


}
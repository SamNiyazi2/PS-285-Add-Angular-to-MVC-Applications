
// 03/09/2021 04:10 pm - SSN - [20210309-1551] - [001] - M03-06 - Add product list component and HTML
// 03/10/2021 01:29 pm - SSN - [20210310-1324] - [001] - M05-05 - Build product search class. Update product list component


import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/category';
import { ProductSearch } from './productSearch';



@Component({

    templateUrl: './product-list.component.html',

})
export class ProductListComponent implements OnInit {

    constructor(private productService: ProductService, private categoryService: CategoryService) {

    }


    ngOnInit(): void {
        this.getProducts();
    }


    products: Product[] = [];
    messages: string[] = [];

    seachCategories: Category[] = [];
    searchEntity: ProductSearch = new ProductSearch();

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
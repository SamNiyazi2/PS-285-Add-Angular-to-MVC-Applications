
// 03/10/2021 04:12 pm - SSN - [20210310-1611] - [001] - M06-03 - Create product detail component classdetail component clas

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from './product';
import { Category } from '../category/category';
import { ProductService } from './product.service';
import { CategoryService } from '../category/category.service';

declare let toastr:any;
 
@Component({

    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

    product: Product;
    messages: string[] = [];

    categories: Category[] = [];


    constructor(private categoryService: CategoryService, private location: Location, private productService: ProductService, private activatedRoute: ActivatedRoute) {

    }


    ngOnInit(): void {

        this.activatedRoute.params.forEach((params: Params) => {

            const id = parseInt(params['id']);

            if (id != -1) {
                this.productService.getProduct(id).subscribe(product => this.product = product, errors => this.handleErrors);
            }
            else {
                this.product = new Product();
                this.product.price = 0;
                this.product.categoryId = 0;
                this.product.url = "http://www.fairwaytech.com";

            }
        });



        this.getCategories();

    }


    getCategories() {

        this.categoryService.getCategories().subscribe(categories => this.categories = categories, errors => this.handleErrors(errors));
    }


    goBack() {

        this.location.back();
    }


    private updateProduct(product: Product) {

        this.productService.updateProduct(product).subscribe(() => {

            this.goBack();
            toastr.success('Record was updated');
        }
            , errors => {
                this.handleErrors(errors);
                toastr.error('Failed to update record');
            }
        );


    }


    private addProduct(product: Product) {

        this.productService.addProduct(product).subscribe(() => {

            this.goBack();
            toastr.success('Record was added');
        }
            , errors => {
                this.handleErrors(errors);
                toastr.error('Failed to update record');
            });
    }


    saveProduct() {

        if (this.product) {

            if (this.product.productId) {
                this.updateProduct(this.product);

            }
            else {
                this.addProduct(this.product);
            }
        }

    }


    private handleErrors(errors: any) {

        this.messages = [];

        for (let msg of errors) {
            this.messages.push(msg);
        }
    }


}
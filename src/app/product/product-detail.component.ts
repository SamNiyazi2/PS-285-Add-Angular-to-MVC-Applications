
// 03/10/2021 04:12 pm - SSN - [20210310-1611] - [001] - M06-03 - Create product detail component classdetail component clas

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from './product';
import { Category } from '../category/category';
import { ProductService } from './product.service';
import { CategoryService } from '../category/category.service';
import { IErrorMessage } from '../errorMessages/index';
import { ccl } from '../errorMessages/errorMessage.model';
import { FormControl } from '@angular/forms';

declare let toastr: any;

@Component({

    templateUrl: './product-detail.component.html?v=4'
})
export class ProductDetailComponent implements OnInit {

    product: Product;
    messages: IErrorMessage[] = [];

    categories: Category[] = [];

    mouseOverSave = false;

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
                this.product.categoryId = "";

            }
        });



        this.getCategories();

    }


    getCategories() {

        this.categoryService.getCategories().subscribe(categories => this.categories = categories.slice(1, categories.length), errors => this.handleErrors(errors));
    }


    goBack() {

        this.location.back();
    }

    
    private updateProduct(product: Product, formObj: FormControl) {

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


    private addProduct(product: Product, formObj: FormControl) {

        // To trigger showing db errors.
        this.setMouseOverSave(false);

        this.productService.addProduct(product).subscribe(() => {

            this.goBack();
            toastr.success('Record was added');
        }
            , errors => {
                this.handleErrors(errors);
                toastr.error('Failed to update record');

                formObj.updateValueAndValidity();
                
                // To trigger showing db errors.
                this.setMouseOverSave(true);

            });
    }


    saveProduct(formObj : FormControl) {
         
        if (this.product) {

            if (this.product.productId) {
                this.updateProduct(this.product, formObj );
            }
            else {
                this.addProduct(this.product, formObj );
            }
        }

    }


    private handleErrors(errors: any) {
 

       // this.messages = this.messages.slice(this.messages.length-1,0);
        this.messages = this.messages.slice(0, 0);
       

        for (let msg of errors) {
            
            this.messages.push( msg as IErrorMessage);
        }
   
    }


    // 05/29/2021 12:20 am - SSN - [20210528-1458] - [005] - Angular validations - New product

    setMouseOverSave(setting) {


        //if (setting== null) {
        //    this.mouseOverSave = false;
        //    return;
        //}

        if (setting == true && setting != this.mouseOverSave) {

            this.mouseOverSave = setting;

        }

        //if (setting == false && setting != this.mouseOverSave) {
            
        //    setTimeout(() => {
        //        this.mouseOverSave = false;
        //    }, 5000);
        //}

    }


}
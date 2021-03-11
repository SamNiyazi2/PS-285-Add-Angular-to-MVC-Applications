
// 03/09/2021 04:10 pm - SSN - [20210309-1551] - [001] - M03-06 - Add product list component and HTML
// 03/10/2021 01:29 pm - SSN - [20210310-1324] - [001] - M05-05 - Build product search class. Update product list component
// 03/10/2021 01:40 pm - SSN - [20210310-1335] - [001] - M05-06 - Calling the category Web API


import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/category';
import { ProductSearch } from './productSearch';
import { Router } from '@angular/router';



@Component({

    templateUrl: './product-list.component.html',

})
export class ProductListComponent implements OnInit {

    constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) {

    }


    ngOnInit(): void {

        this.getProducts();

        this.searchEntity.categoryId = 0;
        this.getSearchCategories();
    }


    products: Product[] = [];
    messages: string[] = [];

    searchCategories: Category[] = [];
    searchEntity: ProductSearch = new ProductSearch();

    haveProductRecords = false;

    private getProducts() {

        this.productService.getProducts().subscribe(products => {
            this.products = products;
            this.haveProductRecords = products && products.length > 0;
        }, errors => this.handleErrors(errors));
    };


    add() {

        this.router.navigate(['/productdetail', -1]);
    }


    selectProduct(id: number) {

        this.router.navigate(['/productdetail', id]);
    }


    deleteProduct(product: Product) {

        if (confirm('Delete this product? \n\nName: ' + product.productName)) {
            this.productService.deleteProduct(product.productId).subscribe(() => this.getProducts(), errors => this.handleErrors(errors));
        }

    }


    search() {

        this.productService.search(this.searchEntity).subscribe(products => this.products = products, errors => this.handleErrors(errors));
    }




    resetSearch() {

        this.searchEntity.categoryId = 0;
        this.searchEntity.productName = '';
        this.getProducts();

    }



    private getSearchCategories() {

        this.categoryService.getSearchCategories().subscribe(categories => this.searchCategories = categories, errors => this.handleErrors(errors));
    }


    private handleErrors(errors: any) {

        this.messages = [];

        for (let msg of errors) {
            this.messages.push(msg);
        }

    }



}
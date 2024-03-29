﻿

// 03/09/2021 04:35 pm - SSN - [20210309-1631] - [001] - M03-07 - Angular routing

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list.component';
import { ProductDetailComponent } from './product/product-detail.component';


const routes: Routes = [

    {

        // All routes must be in lowercase
        // All routes must be in lowercase
        // All routes must be in lowercase
        // All routes must be in lowercase
        path: 'product_ang',
        component: ProductListComponent
    },
    //{
    //    path: 'product/product_ang',
    //    redirectTo: 'productlist'
    //},
    {
        path: 'productdetail/:id',
        component: ProductDetailComponent
    }
    ,
    {
        path: '**',
        redirectTo: 'product_ang'
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
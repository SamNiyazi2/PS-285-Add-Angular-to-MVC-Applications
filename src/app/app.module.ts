import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UrlSerializer } from '@angular/router';
import { HttpModule } from '@angular/http';


import { LowerCaseUrlSerializer } from './lowerCaseUrlSerializer';
import { ProductService } from './product/product.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './product/product-list.component';
import { CategoryService } from './category/category.service';


@NgModule({
    imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule],
    declarations: [AppComponent, ProductListComponent],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: UrlSerializer,
            useClass: LowerCaseUrlSerializer
        }
        , ProductService
        , CategoryService
    ]

})
export class AppModule { }

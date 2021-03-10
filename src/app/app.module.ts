import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UrlSerializer } from '@angular/router';
import { HttpModule } from '@angular/http';

import { LowerCaseUrlSerializer } from './lowerCaseUrlSerializer';
import { ProductService } from './product/product.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './product/product-list.component';


@NgModule({
    imports: [BrowserModule, AppRoutingModule, HttpModule],
    declarations: [AppComponent, ProductListComponent],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: UrlSerializer,
            useClass: LowerCaseUrlSerializer
        }
        , ProductService
    ]

})
export class AppModule { }

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
import { ProductDetailComponent } from './product/product-detail.component';
import { AutoFocusDirective } from './AutoFocusDirective';
import { ErrorMessageFilterPipe } from './errorMessages/index';
import { ErrorMessagesDisplayComponent } from './errorMessages/index';
import { NotLowerCaseValidatorDirective } from './shared/validator-notlowercase';
import { MinValidatorDirective } from './shared/validator-min';


@NgModule({
    imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule],
    declarations: [

        AppComponent,
        ProductListComponent,
        ProductDetailComponent,
        AutoFocusDirective,
        ErrorMessageFilterPipe,
        ErrorMessagesDisplayComponent,
        NotLowerCaseValidatorDirective,
        MinValidatorDirective],

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

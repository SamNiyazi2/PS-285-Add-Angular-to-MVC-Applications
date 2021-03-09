import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';

import { AppRoutingModule } from './app-routing.module';
import { LowerCaseUrlSerializer } from './lowerCaseUrlSerializer';
import { UrlSerializer } from '@angular/router';

@NgModule({
    imports: [BrowserModule, AppRoutingModule],
    declarations: [AppComponent, ProductListComponent],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: UrlSerializer,
            useClass: LowerCaseUrlSerializer
        }
    ]

})
export class AppModule { }

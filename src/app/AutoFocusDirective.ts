
// 03/11/2021 09:45 am - SSN 
// https://netbasal.com/autofocus-that-works-anytime-in-angular-apps-68cb89a3f057

import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[autofocus-v2]'
})
export class AutoFocusDirective implements AfterViewInit {

    constructor(private host: ElementRef) {

    }

    ngAfterViewInit(): void {
         
        if (this.host.nativeElement) {
             
            this.host.nativeElement.focus();
            this.host.nativeElement.classList.add('testClass');
        } 

    }

}
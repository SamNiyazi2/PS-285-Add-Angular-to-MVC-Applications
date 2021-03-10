
// 03/09/2021 04:56 pm - SSN - [20210309-1631] - [002] - M03-07 - Angular routing

// https://www.codeproject.com/Questions/1231299/Angular-url-case-insensitive


import { DefaultUrlSerializer, UrlTree } from '@angular/router';

export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
    parse(url: string): UrlTree {
 
        const path = url.split('?')[0];
        const query = url.split('?')[1] || '';
        const finalUrl = path.toLowerCase() + (query !== '' ? `?${query}` : '');
 
        return super.parse(finalUrl);

    }
}


// 03/09/2021 06:30 pm - SSN - [20210309-1828] - [001] - M04-06 - Creating the product and product service classes


export class Product {

    productId: number;
    productName: string;
    introductionDate: Date;
    price: number;
    url: string;
    categoryId: number|string; // For dropdown hint option
    timestamp:string

}
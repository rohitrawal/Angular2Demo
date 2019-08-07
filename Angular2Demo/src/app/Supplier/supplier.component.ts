import { Component } from "@angular/core"
import { ISupplier } from "./ISupplier";

@Component({
    selector: 'supplier-ui',
    templateUrl: 'app/Supplier/supplier.html'
})

export class supplierComponent {
    suppliers: ISupplier[];
    constructor() {
        this.suppliers = [
            { firstName: 'customer1FirstName', lastName: 'customer1LastName', gender: 'Male', age: 18 },
            { firstName: 'customer2FirstName', lastName: 'customer2LastName', gender: 'Male', age: 18 },
            { firstName: 'customer3FirstName', lastName: 'customer3LastName', gender: 'FeMale', age: 18 },
            { firstName: 'customer4FirstName', lastName: 'customer4LastName', gender: 'FeMale', age: 18 },
            { firstName: 'customer5FirstName', lastName: 'customer5LastName', gender: 'FeMale', age: 18 },
            { firstName: 'customer6FirstName', lastName: 'customer6LastName', gender: 'FeMale', age: 18 }
        ];
    }
}
import { Component } from '@angular/core';

@Component({
    selector: 'my-customer',
    templateUrl: 'app/customer/customer.component.html'
})
export class CustomerComponent {
    firstName: string = 'Tom';
    lastName: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;
}
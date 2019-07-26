import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component'
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, EmployeeComponent, CustomerComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

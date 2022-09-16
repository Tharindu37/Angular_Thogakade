import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { SaveCustomerComponent } from './components/save-customer/save-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { GetCustomerComponent } from './components/get-customer/get-customer.component';
import { GetAllCustomerComponent } from './components/get-all-customer/get-all-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    CustomerComponent,
    SaveCustomerComponent,
    DeleteCustomerComponent,
    GetCustomerComponent,
    GetAllCustomerComponent,
    UpdateCustomerComponent
  ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        MatTabsModule,
        MatIconModule
    ]
})
export class CustomerModule { }

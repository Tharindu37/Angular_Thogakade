import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import {SaveCustomerComponent} from "./components/save-customer/save-customer.component";
import {UpdateCustomerComponent} from "./components/update-customer/update-customer.component";
import {DeleteCustomerComponent} from "./components/delete-customer/delete-customer.component";
import {GetCustomerComponent} from "./components/get-customer/get-customer.component";
import {GetAllCustomerComponent} from "./components/get-all-customer/get-all-customer.component";

const routes: Routes = [
  { path: '', component: CustomerComponent, children:[
      {path: '', redirectTo: '/customer/save', pathMatch: 'full'},
      {path: 'save', component: SaveCustomerComponent},
      {path: 'update', component: UpdateCustomerComponent},
      {path: 'delete', component: DeleteCustomerComponent},
      {path: 'search', component: GetCustomerComponent},
      {path: 'load', component: GetAllCustomerComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

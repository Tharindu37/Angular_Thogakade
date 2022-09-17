import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {Customer} from "../../dto/Customer";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-get-all-customer',
  templateUrl: './get-all-customer.component.html',
  styleUrls: ['./get-all-customer.component.scss']
})
export class GetAllCustomerComponent implements OnInit {
  loading: boolean = false;
  constructor(private customerService : CustomerService,private http: HttpClient, private toastr: ToastrService) { }

  dataSet: Customer[] = [];

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.loading = true;
    this.customerService.getAllCustomer().subscribe(result => {
      // @ts-ignore
      this.dataSet = result;
      this.loading = false;
    }, error=>{
      this.loading = false;
    })
  }

}

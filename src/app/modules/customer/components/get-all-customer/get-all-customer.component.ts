import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {Customer} from "../../dto/Customer";

@Component({
  selector: 'app-get-all-customer',
  templateUrl: './get-all-customer.component.html',
  styleUrls: ['./get-all-customer.component.scss']
})
export class GetAllCustomerComponent implements OnInit {
  loading: boolean = false;
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  dataSet: Customer[] = [];

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.loading = true;
    this.http.get<Customer>('http://localhost:3000/api/v1/customer/getAll'
    ).subscribe(result => {
      // @ts-ignore
      this.dataSet = result;
      this.loading = false;
    }, error=>{
      this.loading = false;
    })
  }

}

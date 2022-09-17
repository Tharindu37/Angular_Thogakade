import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {Customer} from "../../dto/Customer";
import {CustomerService} from "../../services/customer.service";


@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.scss']
})
export class GetCustomerComponent implements OnInit {
  loading: boolean = false;
  constructor(private customerService: CustomerService,private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  dataSet: Customer[] =[];

    searchCustomer(text: string) {
      this.loading = true;
      this.customerService.searchCustomer(
        text
      ).subscribe(result => {
        // @ts-ignore
        this.dataSet = result;
        this.loading = false;
      }, error=>{
        this.loading = false;
        this.onError('Something went wrong');
      })
    }

  onSuccess(title: string) {
    this.toastr.success(title, 'Success!');
  }
  onError(title: string){
    this.toastr.error(title, 'Error!');
  }
}

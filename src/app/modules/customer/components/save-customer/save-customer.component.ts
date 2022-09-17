import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-save-customer',
  templateUrl: './save-customer.component.html',
  styleUrls: ['./save-customer.component.scss']
})
export class SaveCustomerComponent implements OnInit {

  loading = false;

  constructor(private customerService: CustomerService,private http: HttpClient, private toastr: ToastrService) { }

  form = new FormGroup({
    id: new FormControl(null, Validators.required),
    name: new FormControl(null,
      [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    address: new FormControl(null,Validators.required),
    salary: new FormControl(null,Validators.required),
  });

  submitForm(){
    this.loading = true;
      this.customerService.saveCustomer(
        this.form.get('id')?.value.toString(),
        this.form.get('name')?.value.toString(),
        this.form.get('address')?.value.toString(),
        this.form.get('salary')?.value
      ).subscribe(result=>{
      this.onSuccess("Saved success");
      this.loading = false;
    }, error=>{
      this.onError('Try again');
      this.loading = false;
    })
  }

  onSuccess(title: string) {
    this.toastr.success(title, 'Success!');
  }
  onError(title: string){
    this.toastr.error(title, 'Error!');
  }

  ngOnInit(): void {
  }

}

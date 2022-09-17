import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../dto/Customer";


@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {

  loading = false;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  form = new FormGroup({
    id: new FormControl(null, Validators.required),
    name: new FormControl(null,
      [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    address: new FormControl(null,Validators.required),
    salary: new FormControl(null,Validators.required),
  });

  ngOnInit(): void {
  }

  filterUser() {
    this.loading = true;
    this.http.get<Customer>('http://127.0.0.1:3000/api/v1/customer/get',{
      headers: {
        id:this.form.get('id')?.value
      }
    }).subscribe(result => {
      this.loading = false;
      if (result!=null) {
        //bind the data to the form
        this.form.patchValue({
          name: result.name,
          address: result.address,
          salary: result.salary
        })
      }else {
        this.onError('Empty result');
        this.form.reset();
      }
    }, error => {
      this.loading = false;
      this.onError('Try again');
    });
  }

  removeCustomer(){
    if(confirm('Are you sure?')){
      this.loading = true;
      this.http.delete('http://localhost:3000/api/v1/customer/delete',{
        headers: {
          id:this.form.get('id')?.value
        }}).subscribe(result => {
        this.onSuccess('Deleted')
        this.loading = false;
        this.form.reset();
      }, error => {
        this.loading = false;
        this.onError('Try again');
        this.form.reset();
      })
    }

  }

  onSuccess(title: string) {
    this.toastr.success(title, 'Success!');
  }
  onError(title: string){
    this.toastr.error(title, 'Error!');
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-save-customer',
  templateUrl: './save-customer.component.html',
  styleUrls: ['./save-customer.component.scss']
})
export class SaveCustomerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  form = new FormGroup({
    id: new FormControl(null, Validators.required),
    name: new FormControl(null,
      [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    address: new FormControl(null,Validators.required),
    salary: new FormControl(null,Validators.required),
  });

  submitForm(){
    this.http.post("http://127.0.0.1:3000/api/v1/customer/save",{
      id: this.form.get('id')?.value.toString(),
      name: this.form.get('name')?.value.toString(),
      address: this.form.get('address')?.value.toString(),
      salary: this.form.get('salary')?.value
    }).subscribe(result=>{
      console.log(result);
    })
  }

  ngOnInit(): void {
  }

}

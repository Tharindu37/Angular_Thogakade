import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../dto/Customer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public saveCustomer(id: string, name: string, address: string, salary: number)
  : Observable<any> {
    return this.http.post("http://127.0.0.1:3000/api/v1/customer/save",{
      id,
      name,
      address,
      salary
    });
  }

  public updateCustomer(id: string, name: string, address: string, salary: number)
    : Observable<any> {
    return this.http.put("http://127.0.0.1:3000/api/v1/customer/update",{
      id,
      name,
      address,
      salary
    })
  }

  public getCustomers(id: string): Observable<any> {
    return this.http.get<Customer>('http://127.0.0.1:3000/api/v1/customer/get',{
      headers: {
        id
      }
    })
  }

  public deleteCustomers(id: string): Observable<any> {
    return this.http.delete<Customer>('http://127.0.0.1:3000/api/v1/customer/delete',{
      headers: {
        id
      }
    })
  }

  public searchCustomer(text: string): Observable<any>{
    return this.http.get<Customer>('http://localhost:3000/api/v1/customer/search',{
      headers:{text:text}
    })
  }

  public getAllCustomer(): Observable<any> {
    return this.http.get<Customer>('http://localhost:3000/api/v1/customer/getAll'
    )
  }
}

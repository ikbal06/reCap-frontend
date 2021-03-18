import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CustomerResponseModel } from "../models/responses/customerResponseModel";

@Injectable({
  providedIn: 'root'
})

export class CustomerService{
    apiUrl="https://localhost:44350/api/customers/getall"

  constructor(private HttpClient:HttpClient) { }

  getCustomers():Observable<CustomerResponseModel>{
    return this.HttpClient.get<CustomerResponseModel>(this.apiUrl);
    }
}
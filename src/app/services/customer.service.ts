import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../models/entities/customer";
import { ListResponseModel } from "../models/responses/ListResponseModel";


@Injectable({
  providedIn: 'root'
})

export class CustomerService{
    apiUrl="https://localhost:44350/api/customers/getall"

  constructor(private HttpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    return this.HttpClient.get<ListResponseModel<Customer>>(this.apiUrl);
    }
}
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CustomerResponseModel } from "../models/responses/customerResponseModel";


export class CustomerService{
    apiUrl="https://localhost:44350/api/customers/getall"

  constructor(private HttpClient:HttpClient) { }

  getCustomers():Observable<CustomerResponseModel>{
    return this.HttpClient.get<CustomerResponseModel>(this.apiUrl);
    }
}
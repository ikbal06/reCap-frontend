 import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
 import { Observable } from "rxjs";
import { Brand } from "../models/entities/brand";
import { ListResponseModel } from "../models/responses/ListResponseModel";


 @Injectable({
  providedIn: 'root'
})

 export class BrandService{
     apiUrl="https://localhost:44350/api/brands/getall"

   constructor(private HttpClient:HttpClient) { }

   getBrands():Observable<ListResponseModel<Brand>>{
     return this.HttpClient.get<ListResponseModel<Brand>>(this.apiUrl);
     }
 }
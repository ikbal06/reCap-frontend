import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Rental } from "../models/entities/rental";
import { ListResponseModel } from "../models/responses/ListResponseModel";


@Injectable({
  providedIn: 'root'
})

export class RentalService{
    apiUrl="https://localhost:44350/api/rentals/getall"

  constructor(private HttpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    return this.HttpClient.get<ListResponseModel<Rental>>(this.apiUrl);
    }
}
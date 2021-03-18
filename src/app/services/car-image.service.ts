import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CarImageResponseModel } from "../models/responses/car-imageResponseModel";

@Injectable({
  providedIn: 'root'
})


export class ImageService{
    apiUrl="https://localhost:44350/api/carimages/getall"

  constructor(private HttpClient:HttpClient) { }

  getCarImages():Observable<CarImageResponseModel>{
    return this.HttpClient.get<CarImageResponseModel>(this.apiUrl);
    }
}
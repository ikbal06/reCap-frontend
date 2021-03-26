import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CarImage } from "../models/entities/car-image";
import { ListResponseModel } from "../models/responses/ListResponseModel";


@Injectable({
  providedIn: 'root'
})


export class ImageService{
    apiUrl="https://localhost:44350/api/carimages/getall"

  constructor(private HttpClient:HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>>{
    return this.HttpClient.get<ListResponseModel<CarImage>>(this.apiUrl);
    }
}
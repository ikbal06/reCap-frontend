import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { CarResponseModel } from '../models/responses/carResponseModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44350/api/cars/getall"

  constructor(private HttpClient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
    return this.HttpClient.get<CarResponseModel>(this.apiUrl);
    }
}

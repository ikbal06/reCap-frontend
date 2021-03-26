import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/responses/ListResponseModel';
import { Car } from '../models/entities/car';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44350/api/cars/getall"

  constructor(private HttpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    return this.HttpClient.get<ListResponseModel<Car>>(this.apiUrl);
    }
}

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CarImageResponseModel } from "../models/responses/car-imageResponseModel";


export class ImageService{
    apiUrl="https://localhost:44350/api/carimages/getall"

  constructor(private HttpClient:HttpClient) { }

  getCarImages():Observable<CarImageResponseModel>{
    return this.HttpClient.get<CarImageResponseModel>(this.apiUrl);
    }
}
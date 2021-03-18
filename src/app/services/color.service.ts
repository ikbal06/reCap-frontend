import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ColorResponseModel } from "../models/responses/colorResponseModel";


export class ColorService{
    apiUrl="https://localhost:44350/api/colors/getall"

  constructor(private HttpClient:HttpClient) { }

  getColors():Observable<ColorResponseModel>{
    return this.HttpClient.get<ColorResponseModel>(this.apiUrl);
    }
}
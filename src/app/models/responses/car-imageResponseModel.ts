import { CarImage } from "../entities/car-image";
import { ResponseModel } from "./responseModel";

export interface CarImageResponseModel extends ResponseModel{
    data:CarImage[]
}
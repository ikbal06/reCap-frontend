import { Component, OnInit } from '@angular/core';
import { CarImage } from 'src/app/models/entities/car-image';
import { ImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

 carimages:CarImage[]=[]
 dataLoaded=false;

  constructor(private ImageService:ImageService) { }

  ngOnInit(): void {
    this.getImages();
  }
  getImages(){
    this.ImageService.getCarImages().subscribe(response=>{
     this.carimages=response.data
     this.dataLoaded=true;
    })
  }

}

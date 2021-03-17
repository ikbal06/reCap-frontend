import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  image1={id:1,carId:1};
  image2={id:2,carId:2};
  image3={id:3,carId:3};

 Images=[
   this.image1,
   this.image2,
   this.image3
 ];

  constructor() { }

  ngOnInit(): void {
  }

}

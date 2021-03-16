import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  car1 = { carId: 1, carName: "car1", brandId: 1, colorId: 1, modelYear: 2011, dailyPrice: 500, description: "güzel araba" };
  car2 = { carId: 2, carName: "car2", brandId: 2, colorId: 1, modelYear: 2010, dailyPrice: 450, description: "güzel araba" };
  car3 = { carId: 3, carName: "car3", brandId: 3, colorId: 3, modelYear: 2021, dailyPrice: 300, description: "güzel araba" };
  car4 = { carId: 4, carName: "car4", brandId: 3, colorId: 2, modelYear: 2020, dailyPrice: 200, description: "güzel araba" };
  car5 = { carId: 5, carName: "car5", brandId: 1, colorId: 2, modelYear: 2018, dailyPrice: 400, description: "güzel araba" };
  
  cars = [
    this.car1, 
    this.car2, 
    this.car3,
    this.car4,
    this.car5
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
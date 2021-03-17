import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brand1={carId:1,brandName:"brand1"};
  brand2={carId:2,brandName:"brand2"};
  brand3={carId:3,brandName:"brand3"};

  brands=[
    this.brand1,
    this.brand2,
    this.brand3
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

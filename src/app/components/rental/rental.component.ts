import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {


  rental1={Id:1,carId:1,customerName:"ikbal"};
  rental2={Id:2,carId:2,customerName:"İnci"};
  rental3={Id:3,carId:3,customerName:"Fatma"};

   rentals=[
     this.rental1,
     this.rental2,
     this.rental3
   ];

  constructor() { }

  ngOnInit(): void {
  }

}

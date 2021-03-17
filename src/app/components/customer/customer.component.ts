import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer1={customerName:"ikbal",customerSurname:"Kırklar",userId:1};
  customer2={customerName:"İnci",customerSurname:"Kırklar",userId:2};
  customer3={customerName:"Fatma",customerSurname:"Kırklar",userId:3};

customers=[
  this.customer1,
  this.customer2,
  this.customer3
];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color1={carId:1,colorName:"siyah"};
  color2={carId:2,colorName:"beyaz"};
  color3={carId:3,colorName:"sarı"};

  colors=[

    this.color1,
    this.color2,
    this.color3
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

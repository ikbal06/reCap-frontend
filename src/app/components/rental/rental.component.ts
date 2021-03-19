import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/entities/rental';
import { RentalResponseModel } from 'src/app/models/responses/rentalResponseModel';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

   rentals:Rental[]=[];
   dataLoaded=false;

   RentalResponseModel:RentalResponseModel={
    data:this.rentals,
    message:"",
    success:true
  }

  constructor(private RentalService:RentalService) { }

  ngOnInit(): void {
   this.getRentals
  }

  getRentals(){
    this.RentalService.getRentals().subscribe(response=>{
      this.rentals=response.data
      this.dataLoaded=true;
    })
  }

}

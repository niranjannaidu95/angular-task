import { Component, OnInit } from '@angular/core';
import { CustomerDetailsService } from '../customer-details.service';


@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.scss']
})
export class CardetailsComponent implements OnInit {
  public customersinfo :string = "none";

  constructor(public customerDetails:CustomerDetailsService) { }


  ngOnInit(): void {
  }

    opencusInfo(){
this.customersinfo = "block"

  }


}


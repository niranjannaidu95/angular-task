import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Customer, CustomerDetailsService,  } from '../customer-details.service';
import { LocationService,} from '../location.service';

@Component({
  selector: 'app-customerinfo',
  templateUrl: './customerinfo.component.html',
  styleUrls: ['./customerinfo.component.scss'],
  providers: [LocationService]

})
export class CustomerinfoComponent implements OnInit {
  public fullname!: string;
  public btn2: string = "none";
  public btn3: string = "none";
  public thankyou: string = "none";

  constructor(private service : LocationService, private cusDetails :CustomerDetailsService){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public myControl = new FormControl();
  public options: any = [];
  public userinput:string ="";
  public toggle : string = "block";
  public inputToggle : string = "none";



  public btn: string = "block";

  public customer: Customer = { id: 0, name: "", phone_number : "", email : "" };


  getLocation(data : string){
      this.service.getLocation(data).subscribe(cities => this.options = cities)
  }
  // clearFilters() {

  // this.fullname = '';
  // }
  userfield(){
    this.thankyou = "none";

 this.toggle = "none";
 this.inputToggle = "block";
 this.btn ="none";
 this.btn2= "block";
 this.btn3 = "none"
  }

  next(){
    this.btn2 = "none";
    this.btn3 = "block";
     this.thankyou = "block";
   this.toggle = "none";
   this.inputToggle = "none";
   this.btn ="none";
  }

  getBack(){
    this.toggle = "block";
    this.thankyou ="none";
    this.btn3 = "none";
    this.btn = "block";
    this.cusDetails.addCustomer(this.customer);
    this.toggle = "block";
    this.thankyou ="none";
  }

}

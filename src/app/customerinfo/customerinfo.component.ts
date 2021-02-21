import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomerDetailsService, User } from '../customer-details.service';
import { LocationService,} from '../location.service';

@Component({
  selector: 'app-customerinfo',
  templateUrl: './customerinfo.component.html',
  styleUrls: ['./customerinfo.component.scss'],
  providers: [LocationService]

})
export class CustomerinfoComponent implements OnInit {
  public fullname!: string;

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
  public btn2: string = "none";
  public btn3: string = "none";
  public greet: string = "none";
  public user: User = { id: 0, name: "", phone_number : "", email : "" };


  getLocation(data : string){
      this.service.getLocation(data).subscribe(cities => this.options = cities)
  }
  clearFilters() {

  this.fullname = '';
  }
  userfield(){
 this.toggle = "none";
 this.inputToggle = "block";
 this.btn ="none";
 this.btn2= "block";
 this.greet = "none";
 this.btn3 = "none"
  }

  greetbtn(){
   this.toggle = "none";
   this.inputToggle = "none";
   this.btn ="none";
   this.btn2 = "none";
   this.btn3 = "block";
    this.greet = "block";
  }

  backAgain(){
    this.toggle = "block";
    this.greet ="none";
    this.btn3 = "none";
    this.btn = "block";
    this.cusDetails.addUser(this.user);

  }

}

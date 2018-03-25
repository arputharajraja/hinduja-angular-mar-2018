import { Component, 
          OnInit,
          OnDestroy,
          Input
        } from '@angular/core';


export interface Address {
  city: string;
  state: string;
  pincode?: number; // ? means optional
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit, OnDestroy {

  @Input()
  address: Address;

  constructor() {
    console.log("Address created");
   }

  ngOnInit() {
    console.log("Address init");
  }

  ngOnDestroy() {
    console.log("Address Destroy");
  }

}

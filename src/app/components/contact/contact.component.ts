import { Component, OnInit, 
         ViewChild, ElementRef } from '@angular/core';

import { Address } from '../../shared/components/address/address.component';

/* access #reference in component */


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  // <input #cityName
  // p #para1

  // Get access to dom element in html
  @ViewChild('cityName')
  inputElement: ElementRef;

  @ViewChild("para1")
  para1Element: ElementRef;

   // address: Address;

  address: Address = {
    city: 'Chennai',
    state: 'TN',
    pincode: 630000
  };

  bangaloreAddress: Address = {
    city: 'Bangalore',
    state: 'KA'
  };

  mumbaiAddress: Address = {
    city: 'Mumbai',
    state: 'MH'
  };

  selectedCity: string = '';

  highlight: boolean = false;

  constructor() { }

  ngOnInit() {
    // good place to acces viewchild
    // nativeelement is a DOM
    this.inputElement
        .nativeElement.value = "From TS";
    this.inputElement.nativeElement.focus();
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter: number = 0;

  price: number = 89.456;
  title: string = "Home";
  today: Date = new Date();


  // DI
  constructor(private dataService: DataService) {
    console.log("home comp cons");

    this.counter = dataService.getCounter();
   }

  ngOnInit() {
  }


  parentClick(e: Event) {
    console.log("Parent click ", e);
    //alert("Parent Click");
  }

  increment(e : Event) {
    
    //console.trace();

    console.log("Increment ", e);

    // prevent bubble
    //e.stopPropagation();
     

    //this.counter++;

    this.dataService.increment();
    // FIXME: using RxJS Observable
    this.counter = this.dataService.getCounter();
  }

  decrement() {
    // this.counter--;
    this.dataService.decrement();
    this.counter = this.dataService.getCounter();
  }

  getValue() {
    console.log("getValue called");
    return 1;
  }

}

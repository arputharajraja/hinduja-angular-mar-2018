import { Injectable } from '@angular/core';

import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

/*
  1. Write business logic
  2. Write communication logic (Restful api call)
  3. Sharign data amoung components
  4. Keep data in memory even comp destroyed
*/

@Injectable()
export class DataService {

  counterSource: BehaviorSubject<number>;
  // Observable
  counter: number = 1000;

  getCounter() {
    return this.counter;
  }

  increment() {
    this.counter++;

    // publish the new value
    this.counterSource.next(this.counter);
  }

  decrement() {
    this.counter--;

    this.counterSource.next(this.counter);
    // publish the new value
  }

  constructor() {
      console.log("Data Service created");

      this.counterSource = new BehaviorSubject(this.counter);
   }

}

import { Pipe, PipeTransform } from '@angular/core';

// n^m 2^3 ==> 8

// stateless pipe
@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  constructor() {
    console.log("Power pipe created");
  }


  // {{ 2 | power:3}}
  // {{ 2 | power}}
  transform(value: number, 
            exponent: number = 1): number {
      console.log("power pipe transform ", value, exponent);
      return Math.pow(value, exponent);
  }

}

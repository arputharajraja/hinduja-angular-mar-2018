import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  counter: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // subscription
    this.dataService
        .counterSource
        .subscribe ( n => {
           this.counter = n;
           console.log("COUNTER HEADER SUB", n);
        });
  }

}

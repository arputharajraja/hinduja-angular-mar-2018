import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  members: any[] = [
      { name: 'Krish'},
      { name: 'Venkat'}
  ];

  show: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  addMember() {
    this.members.push ({
      name: 'Member ' + Math.random()
    });
  }

  empty() {
    this.members = [];
  }

}

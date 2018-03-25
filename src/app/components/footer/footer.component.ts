import { Component, OnInit,
         Input, 
         Output, EventEmitter
} from '@angular/core';


/*
   parent to child [Input]
   child to parent (Output, Event)
   property binding
   custom event binding
*/

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // property binding
  @Input()
  year: number;

  @Input('x-title') // alias
  title: string;

  // child to parent communication
  // always by event only

  // event binding ()
  @Output()
  contactEvent: EventEmitter<any>
             = new EventEmitter();


  constructor() { }

  ngOnInit() {
     
    console.log(" Footer Year ", 
                this.year, typeof this.year);
  }

  // call this method from parent
  setYear(year: number) {
    this.year = year;
    console.log("set year called");
  }

  onContactClick() {
      // publish/emit an event
      // publish to parent
      this.contactEvent.emit("Contact Us");
  }

}

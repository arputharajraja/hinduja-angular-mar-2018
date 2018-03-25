import {Component, OnInit,
        ViewChild
} from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';

// decorator
// meta data to class
@Component({
    selector: 'app-root', // html tag name

    // view 
    templateUrl: 'app.component.html',

    // scopped style
    styleUrls: [
        'app.component.css'
    ]
})
export class AppComponent implements OnInit {


    @ViewChild("appFooter")
    footer: FooterComponent;


    // data/ model
    title: string = 'Product app';
    year: number;

    // called before displaying view
    constructor() {
        console.log("App comp created");
        this.year = 2018;
    }

    // called automatically after view displayed
    ngOnInit() {
        setTimeout( () => {
             
            console.log("timeout ");
            this.year = this.year + 1;
        }, 3000);
    }

    // receive event from child
    receiveFromChild(msg: any) {
        alert(msg);
    }

    callChildMethod() {
        this.footer.setYear(2030);
    }
}

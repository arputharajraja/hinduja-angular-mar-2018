import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressComponent } from './components/address/address.component';
import { LikeComponent } from './components/like/like.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      AddressComponent, 
      LikeComponent, 
      HighlightDirective, 
      PowerPipe, 
      FilterPipe
    
    ],

    // exports helps to use comp, directive, pipes
    // in other modules
    exports: [
      AddressComponent,
      HighlightDirective,
      PowerPipe
    ],

    providers: [
      DataService
    ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';


// routing specific to product features
import {Routes, RouterModule} from '@angular/router';

import {FormsModule} from '@angular/forms';
import { ProductService } from './services/product.service';
import { SaveAlertGuard } from './guards/save-alert.guard';
import { CanEditGuard } from './guards/can-edit.guard';


const routes: Routes = [
  {
    path: '',
    component: ProductHomeComponent,

    // nested navigation
    children: [
      {
        path: 'list',  // parent path/child path  products/list
        component: ProductListComponent
      },

      // data url
      // todo: edit

      {
        path: 'edit/:id', // products/edit/1234556
        component: ProductEditComponent,
        canActivate: [CanEditGuard],
        canDeactivate: [SaveAlertGuard]
      },

      {
        path: 'create', // products/create
        component: ProductEditComponent,
        canActivate: [CanEditGuard],
        canDeactivate: [SaveAlertGuard]
      }, 

      {
        path: 'search',
        component: ProductSearchComponent
      }
    ]

  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    // FIXME:
    // submodules, you can use forChild
    RouterModule.forChild(routes)
  ],

  providers: [
    ProductService, 
    CanEditGuard,
    SaveAlertGuard
  ],

  declarations: [ProductHomeComponent, ProductEditComponent, ProductListComponent, ProductSearchComponent]
})
export class ProductModule { }

import { Injectable } from '@angular/core';
import { CanDeactivate  } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProductEditComponent } from '../components/product-edit/product-edit.component';

@Injectable()
export class SaveAlertGuard implements CanDeactivate<ProductEditComponent> {
  canDeactivate(target: ProductEditComponent): boolean {
    if (target.form.pristine) {
      return true;
    }

    let result = window.confirm("Unsaved changed, do you want to leave?")
      
    return result;
  }
}

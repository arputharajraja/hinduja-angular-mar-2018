import { Injectable, Injector } from '@angular/core';

import { HttpInterceptor, 
        HttpRequest, 
        HttpHandler, 
        HttpEvent } from '@angular/common/http';

 import { Observable } from 'rxjs/Observable';

@Injectable()
export class IntercepterService implements HttpInterceptor  {
 

  constructor(private injector: Injector) {
    console.log("Interceptor created");
  }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
    console.log ("Intercepter ", request.url);
    //TODO: injector
 

    //TODO: Inject token

    request = request.clone({
      setHeaders: {
        Authorization: `JWT flakdsjflkadsjfladsjlkfjadslkfjads`
      }
    });
    
    return next.handle(request);
  }

}
// bootstrap/load angular app into browser

import {platformBrowserDynamic} 
    from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
  
// bootstarp appModule into browser
platformBrowserDynamic()
    .bootstrapModule(AppModule);
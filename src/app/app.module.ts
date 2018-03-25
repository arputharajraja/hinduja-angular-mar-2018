// is logical collection of 
// component, directive, pipes
// services [business logic, communication]
// dependencies of other module

import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {BrowserModule} 
            from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Step 1: Route Configuration
import {Routes, RouterModule} from '@angular/router';

// import { ProductModule } from './product/product.module';



// ajax calls
// ng 4.3 onwards
import {HttpClientModule} 
        from '@angular/common/http';


import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { IntercepterService } from './services/interceptor.service';


const routes: Routes = [
    {
        path: '', // home page
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        //lazy loading
        path: 'products',
        loadChildren: 'app/product/product.module#ProductModule'
    },

    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '**', // not found
        component: NotFoundComponent
    }
];
 


@NgModule({
    imports: [
        // 3rd party/custom modules
        BrowserModule, 
        HttpClientModule,

         

        SharedModule, 
        // creates and returns a module
        // based on route config
        RouterModule.forRoot(routes),

   //    ProductModule

        // InventoryModule
    ],

    declarations: [
        // components, pipe and directives
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        NotFoundComponent,
        // HeaderComponent,
        // FooterComponent,
        // HomeComponent
    ],

    bootstrap: [
        AppComponent 
    ],

    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: IntercepterService,
            multi: true
        }
    ]
})
export class AppModule {

}

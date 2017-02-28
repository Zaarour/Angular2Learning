import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {ProductModule} from './products/product.module';
import { WelcomeComponent } from './home/welcome.component';
import { AppRoutingModule } from './appRouting.module';

@NgModule({
  imports: [BrowserModule,  HttpModule,ProductModule,AppRoutingModule],
  declarations: [AppComponent, WelcomeComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }



// notes, app module manages the app as a whole, the app module should be small and we should use other modules. 
// BrowserModule is normally in this module since it is needed almost everywhere
// routes for general pages are also everywhere

// we then import feature modules ( in our case productModle)
// we then decalare the component of this module, in this case the appComp and Welcomecomp only as we moved productComp to different feature module


//summary


/*
- Every app should contain a root app module, this is normally what bootstraps AppComponent
-A very good way of organising the app is to have feature modules, like product module, customer module etc.
- Shared stuff belongs to one ore more sharedModules which normally used exports
- if you have services that should be up and running at the begning of the app, consider defining a core module that runs first, be sure it is imported once in app module (providers live here)
- Routed can be refactored in their own modules


In general, NgModule meta data contains the following:
- Boostrap: contains startup components, normally appModule only has this and other modules don't
- Declarations : What belongs to this module, components ,pipes etc.
- Export : what need to be exported to the module that imports this module
- Import: what this module needs
- Providers: lists the service providers, these providers are registerd in angular root injector to be available everywhere in the app

 */
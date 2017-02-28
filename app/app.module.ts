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


// for future, we can create
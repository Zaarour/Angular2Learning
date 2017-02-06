import { NgModule } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent , ProductListComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './products/product-filter.filter';
import { StarComponent } from './shared/star.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ AppComponent , ProductListComponent,ProductFilterPipe,StarComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

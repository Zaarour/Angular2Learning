import { NgModule } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './products/product-filter.filter';
import { StarComponent } from './shared/star.component';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule,FormsModule,HttpModule ],
  declarations: [ AppComponent , ProductListComponent,ProductFilterPipe,StarComponent,ProductDetailComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductFilterPipe } from './product-filter.filter';
import { StarComponent } from '../shared/star.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard.service';
import { ProductService } from './product.service';

@NgModule({
    declarations: [ProductListComponent, ProductDetailComponent, ProductFilterPipe, StarComponent],
    imports: [CommonModule, FormsModule, RouterModule.forChild(
        [{ path: 'products', component: ProductListComponent },
        { path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent }])],

    providers: [ProductService, ProductDetailGuard]


})
export class ProductModule {

}
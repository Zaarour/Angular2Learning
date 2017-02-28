import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFilterPipe } from './product-filter.filter';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard.service';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ProductListComponent, ProductDetailComponent, ProductFilterPipe],
    imports: [ SharedModule, RouterModule.forChild(
        [{ path: 'products', component: ProductListComponent },
        { path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent }])],

    providers: [ProductService, ProductDetailGuard]


})
export class ProductModule {

}
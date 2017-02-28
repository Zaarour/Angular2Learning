import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFilterPipe } from './product-filter.filter';
import { ProductRoutingModule } from './productRouting.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard.service';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ProductListComponent, ProductDetailComponent, ProductFilterPipe],
    imports: [SharedModule, ProductRoutingModule],
    providers: [ProductService, ProductDetailGuard]
})
export class ProductModule {

}

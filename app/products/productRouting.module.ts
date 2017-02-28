import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard.service';


@NgModule({
    imports:[RouterModule.forChild(
        [{ path: 'products', component: ProductListComponent },
        { path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent }])]

        ,

        exports:[RouterModule]
})
export class ProductRoutingModule {

}



// feature modules routers use forChild not forRoot to ensure that we don't
// register the routing service a second time. Only in app module do forRoot as it automatically register the service for us
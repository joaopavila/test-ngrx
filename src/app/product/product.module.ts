import { NgModule } from '@angular/core';

import { ProductItemComponent } from './product-item/product-item.component';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductStoreModule } from './store/product-store.module';


@NgModule({
  imports: [
    ProductRoutingModule,
    SharedModule,
    ProductStoreModule
  ],
  exports: [],
  declarations: [ProductItemComponent],
  providers: [],
})
export class ProductModule { }

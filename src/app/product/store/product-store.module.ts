import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// import { TaskEffects } from './product.effects';
import { productReducer } from './product.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('product', productReducer),
    EffectsModule.forFeature([])
  ],
  exports: [StoreModule, EffectsModule],
  declarations: [],
  providers: [],
})
export class ProductStoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';

import { StoreModule } from '@ngrx/store';

import { counterReducer } from './store/counter.reducer';
import { SharedModule } from '../shared/shared.module';
import { CounterNgrxRoutingModule } from './counter-ngrx-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CounterNgrxRoutingModule,
    StoreModule.forFeature('counter', counterReducer),
    SharedModule
  ],
  declarations: [CounterComponent],
  exports: [StoreModule, CounterComponent]
})
export class CounterNgrxModule { }


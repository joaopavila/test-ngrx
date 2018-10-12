import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';

import { StoreModule } from '@ngrx/store';

import { counterReducer } from './store/counter.reducer';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forRoot({counter: counterReducer})
  ],
  declarations: [CounterComponent],
  exports: [StoreModule, CounterComponent]
})
export class CounterNgrxModule { }


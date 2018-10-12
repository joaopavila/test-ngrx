import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CounterNgrxModule } from './counter-ngrx/counter-ngrx.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    CounterNgrxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

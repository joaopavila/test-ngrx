import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';


@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule
  ]
})
export class SharedModule { }

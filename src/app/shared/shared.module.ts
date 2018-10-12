import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';


@NgModule({
  exports: [
    CommonModule,
    MatButtonModule
  ]
})
export class SharedModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatIconModule, MatBadgeModule, MatCardModule, MatGridListModule } from '@angular/material';


@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class SharedModule { }

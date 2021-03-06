import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'counter', loadChildren: './counter-ngrx/counter-ngrx.module#CounterNgrxModule' },
  { path: '', loadChildren: './product/product.module#ProductModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

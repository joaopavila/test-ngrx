// import { Injectable } from '@angular/core';
// import { Actions, Effect } from '@ngrx/effects';
// import { of } from 'rxjs';
// import { map, switchMap, catchError } from 'rxjs/operators';

// import * as task from './product.action';
// import { ProductService } from '../service/product.service';


// @Injectable()
// export class TaskEffects {
//   constructor(private api: ProductService, private actions$: Actions) {}


//   @Effect()
//   getProducts$ = this.actions$
//     .ofType(task.LoadAction)
//     .pipe(
//       map(action => action.payload),
//       switchMap(payload =>
//         this.api
//           .remove(payload.id)
//           .pipe(
//             map(res => new task.LoadAction()),
//             catchError(error => this.handleError(error))
//           )
//       )
//     );

//   private handleError(error) {
//     return of(new task.ErrorAction(error));
//   }
// }

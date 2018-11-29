export enum ProductActions {
  INCREMENT = '[Product] Product Increment',
  DECREMENT = '[Product] Product Decrement',
  RESET = '[Product] Product Reset',
  LOAD = '[Product] Load'
}

export class IncrementAction { readonly type = ProductActions.INCREMENT; }
export class DecrementAction { readonly type = ProductActions.DECREMENT; }
export class ResetAction { readonly type = ProductActions.RESET; }

export class LoadAction { type = ProductActions.LOAD; }


export type TaskAction = IncrementAction | DecrementAction | ResetAction | LoadAction ;

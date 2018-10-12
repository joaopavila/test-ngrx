export enum CounterActions {
  INCREMENT = '[Teste] Teste Increment',
  DECREMENT = '[Teste] Teste Decrement',
  RESET = '[Teste] Teste Reset'
}

export class IncrementAction { readonly type = CounterActions.INCREMENT; }
export class DecrementAction { readonly type = CounterActions.DECREMENT; }
export class ResetAction { readonly type = CounterActions.RESET; }


export type TaskAction = IncrementAction | DecrementAction | ResetAction ;

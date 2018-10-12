import { TaskAction, CounterActions } from './counter.action';

export function counterReducer(state = 0, action: TaskAction) {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return state + 1;

    case CounterActions.DECREMENT:
      return state - 1;

    case CounterActions.RESET:
      return 0;

    default:
      return state;
  }
}

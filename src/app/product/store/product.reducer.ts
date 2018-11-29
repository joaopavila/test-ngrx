import { TaskAction, ProductActions } from './product.action';

export function productReducer(state = 0, action: TaskAction) {
  switch (action.type) {
    case ProductActions.INCREMENT:
      return state + 1;

    case ProductActions.DECREMENT:
      return state - 1;

    case ProductActions.RESET:
      return 0;

    default:
      return state;
  }
}

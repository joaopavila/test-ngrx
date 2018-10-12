import { CounterNgrxModule } from './counter-ngrx.module';

describe('CounterNgrxModule', () => {
  let counterNgrxModule: CounterNgrxModule;

  beforeEach(() => {
    counterNgrxModule = new CounterNgrxModule();
  });

  it('should create an instance', () => {
    expect(CounterNgrxModule).toBeTruthy();
  });
});

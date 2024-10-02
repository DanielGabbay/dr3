declare type SignalValue<T extends import('@angular/core').Signal<unknown>> =
  T extends import('@angular/core').Signal<infer V> ? V : never;

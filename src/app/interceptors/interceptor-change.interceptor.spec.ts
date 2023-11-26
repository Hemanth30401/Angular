import { TestBed } from '@angular/core/testing';

import { InterceptorChangeInterceptor } from './interceptor-change.interceptor';

describe('InterceptorChangeInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorChangeInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorChangeInterceptor = TestBed.inject(InterceptorChangeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot} from '@angular/router';

export class ActivatedRouteMock {
  params = new Observable(observer => {
    const urlParams = {
      param1: 'some',
      param2: 'params'
    };
    observer.next(urlParams);
    observer.complete();
  });

  snapshot = new ActivatedRouteSnapshot();
}

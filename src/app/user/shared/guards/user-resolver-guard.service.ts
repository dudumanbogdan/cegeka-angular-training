import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverGuard implements Resolve<any> {
  constructor(
    private userService: UserService
  ) {
  }

  resolve(snapshot: ActivatedRouteSnapshot) {
    return this.userService.get(+snapshot.params.id);
  }
}

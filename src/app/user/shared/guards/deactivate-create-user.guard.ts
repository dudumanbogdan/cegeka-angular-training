import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {CreateUserInfoReactiveComponent} from '../../create-user-info-reactive/create-user-info-reactive.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateCreateUserGuard  implements CanDeactivate<CreateUserInfoReactiveComponent> {
  canDeactivate(
    component: CreateUserInfoReactiveComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    return component.canDeactivate();
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserModel} from '../shared/models/user.model';
import {UserService} from '../shared/services/user.service';
import {CreateUserStateService} from '../shared/services/create-user-state.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  userInfos: UserModel[];
  filterArgs = {birthday: new Date(1999, 2, 5)};
  unsubscribe: Subject<any> = new Subject();

  constructor(private userService: UserService,
              private createUserStateService: CreateUserStateService,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.userInfos = this.userService.getAll();

    this.createUserStateService.createUserSource$()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        console.log(data);
        this.userInfos = Object.assign([], this.userService.getAll());
      });
  }

  isRouteActive(id: number) {
    return this.router.isActive(`chat/${id}`, true);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

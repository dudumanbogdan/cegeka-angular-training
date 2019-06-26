import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserModel} from '../shared/models/user.model';
import {Gender} from '../shared/enums/gender';
import {UserService} from '../shared/services/user.service';
import {CreateUserStateService} from '../shared/services/create-user-state.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  userInfos: UserModel[];
  filterArgs = {birthday: new Date(1999, 2, 5)};
  unsubscribe: Subject<any> = new Subject();

  constructor(private userService: UserService, private createUserStateService: CreateUserStateService) {
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

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

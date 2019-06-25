import {Component, OnInit} from '@angular/core';
import {UserModel} from '../shared/models/user.model';
import {Gender} from '../shared/enums/gender';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userInfos: UserModel[];
  filterArgs = {birthday: new Date(1999, 2, 5)};

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userInfos = this.userService.getAll();
  }

}

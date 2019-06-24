import { Component, OnInit } from '@angular/core';
import {UserModel} from '../shared/models/user.model';
import {Gender} from '../shared/enums/gender';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userInfos: UserModel[];
  filterArgs = {birthday: new Date(1999, 2, 5)};

  constructor() { }

  ngOnInit() {
    this.userInfos = [
      new UserModel({birthday: new Date(1999, 2, 4), firstName: 'John', lastName: 'Bravo', type: Gender.Female, status: true}),
      new UserModel({birthday: new Date(1999, 3, 4), firstName: 'Jacquelyn', lastName: 'Beeck', type: Gender.Female}),
      new UserModel({birthday: new Date(1999, 4, 4), firstName: 'Clarita', lastName: 'Snead', type: Gender.Female}),
      new UserModel({birthday: new Date(1999, 5, 4),  firstName: 'Cornelle', lastName: 'MacAdam', type: Gender.Female, status: true}),
      new UserModel({birthday: new Date(1999, 1, 4),  firstName: 'Charmane', lastName: 'Milliken', type: Gender.Female}),
      new UserModel({birthday: new Date(1999, 2, 4),  firstName: 'Yvette', lastName: 'Medcalfe', type: Gender.Unknown}),
      new UserModel({birthday: new Date(1999, 8, 4), firstName: 'Babbie', lastName: 'MacKay', type: Gender.Female}),
      new UserModel({birthday: new Date(1999, 7, 4), firstName: 'Haily', lastName: 'Longea', type: Gender.Female}),
      new UserModel({birthday: new Date(1999, 9, 4), firstName: 'Fredrika', lastName: 'Heimes', type: Gender.Unknown, status: true}),
      new UserModel({birthday: new Date(1999, 10, 4),  firstName: 'Pru', lastName: 'Barlee', type: Gender.Female}),
      new UserModel({birthday: new Date(1999, 3, 4),  firstName: 'Torrie', lastName: 'Leveret', type: Gender.Female, status: true}),
      new UserModel({birthday: new Date(1999, 4, 4),  firstName: 'Nickolai', lastName: 'Lindl', type: Gender.Male}),
      new UserModel({birthday: new Date(1999, 7, 4),  firstName: 'Dane', lastName: 'Bardill', type: Gender.Female }),
      new UserModel({birthday: new Date(1999, 10, 4), firstName: 'John', lastName: 'Bravo', type: Gender.Female})
    ];
  }

}

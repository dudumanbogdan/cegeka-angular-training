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

  constructor() { }

  ngOnInit() {
    this.userInfos = [
      new UserModel({firstName: 'John', lastName: 'Bravo', type: Gender.Female, status: true}),
      new UserModel({firstName: 'Jacquelyn', lastName: 'Beeck', type: Gender.Female}),
      new UserModel({firstName: 'Clarita', lastName: 'Snead', type: Gender.Female}),
      new UserModel({ firstName: 'Cornelle', lastName: 'MacAdam', type: Gender.Female, status: true}),
      new UserModel({ firstName: 'Charmane', lastName: 'Milliken', type: Gender.Female}),
      new UserModel({ firstName: 'Yvette', lastName: 'Medcalfe', type: Gender.Female}),
      new UserModel({firstName: 'Babbie', lastName: 'MacKay', type: Gender.Female}),
      new UserModel({firstName: 'Haily', lastName: 'Longea', type: Gender.Female}),
      new UserModel({firstName: 'Fredrika', lastName: 'Heimes', type: Gender.Female, status: true}),
      new UserModel({ firstName: 'Pru', lastName: 'Barlee', type: Gender.Female}),
      new UserModel({ firstName: 'Torrie', lastName: 'Leveret', type: Gender.Female, status: true}),
      new UserModel({ firstName: 'Nickolai', lastName: 'Lindl', type: Gender.Male}),
      new UserModel({ firstName: 'Dane', lastName: 'Bardill', type: Gender.Female }),
      new UserModel({firstName: 'John', lastName: 'Bravo', type: Gender.Female})
    ];
  }

}

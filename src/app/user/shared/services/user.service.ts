import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';
import {Gender} from '../enums/gender';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    new UserModel({id: 1, birthday: new Date(1999, 2, 4), firstName: 'John', lastName: 'Bravo', type: Gender.Female, status: true}),
    new UserModel({id: 2, birthday: new Date(1999, 3, 4), firstName: 'Jacquelyn', lastName: 'Beeck', type: Gender.Female}),
    new UserModel({id: 3, birthday: new Date(1999, 4, 4), firstName: 'Clarita', lastName: 'Snead', type: Gender.Female}),
    new UserModel({id: 4, birthday: new Date(1999, 5, 4), firstName: 'Cornelle', lastName: 'MacAdam', type: Gender.Female, status: true}),
    new UserModel({id: 5, birthday: new Date(1999, 1, 4), firstName: 'Charmane', lastName: 'Milliken', type: Gender.Female}),
    new UserModel({id: 6, birthday: new Date(1999, 2, 4), firstName: 'Yvette', lastName: 'Medcalfe', type: Gender.Unknown}),
    new UserModel({id: 8, birthday: new Date(1999, 8, 4), firstName: 'Babbie', lastName: 'MacKay', type: Gender.Female}),
    new UserModel({id: 7, birthday: new Date(1999, 7, 4), firstName: 'Haily', lastName: 'Longea', type: Gender.Female}),
    new UserModel({id: 9, birthday: new Date(1999, 9, 4), firstName: 'Fredrika', lastName: 'Heimes', type: Gender.Unknown, status: true}),
    new UserModel({id: 10, birthday: new Date(1999, 10, 4), firstName: 'Pru', lastName: 'Barlee', type: Gender.Female}),
    new UserModel({id: 11, birthday: new Date(1999, 3, 4), firstName: 'Torrie', lastName: 'Leveret', type: Gender.Female, status: true}),
    new UserModel({id: 12, birthday: new Date(1999, 4, 4), firstName: 'Nickolai', lastName: 'Lindl', type: Gender.Male}),
    new UserModel({id: 13, birthday: new Date(1999, 7, 4), firstName: 'Dane', lastName: 'Bardill', type: Gender.Female}),
    new UserModel({id: 14, birthday: new Date(1999, 10, 4), firstName: 'John', lastName: 'Bravo', type: Gender.Female})
  ];

  constructor() {
  }

  getAll(): UserModel[] {
    return this.users;
  }

  get(id: number) {
    return this.users.find(x => x.id === id);
  }

  addUserInfo(user: any) {
    this.users.push(new UserModel(user));
  }
}

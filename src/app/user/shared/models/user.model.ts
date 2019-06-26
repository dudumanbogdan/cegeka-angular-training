import {UserInfoModel} from '../interfaces/user-info.model';
import {Gender} from '../enums/gender';

export class UserModel implements UserInfoModel {
  firstName: string;
  lastName: string;
  birthday?: Date;
  type: Gender;
  status?: boolean;
  id: number;

  constructor(fields?: {
    id: number,
    firstName: string,
    lastName: string,
    birthday?: Date,
    type: Gender,
    status?: boolean,
  }) {
    if (fields) {
      this.firstName = fields.firstName;
      this.lastName = fields.lastName;
      this.birthday = new Date(fields.birthday);
      this.type = fields.type;
      this.status = fields.status || false;
      this.id = fields.id;
    }
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  toString(): any {
    return this.firstName + ' ' + this.lastName;
  }
}

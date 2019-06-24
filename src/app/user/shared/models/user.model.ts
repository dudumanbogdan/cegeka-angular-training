import { UserInfoModel } from '../interfaces/user-info.model';
import {Gender} from '../enums/gender';

export class UserModel implements UserInfoModel {
  firstName: string;
  lastName: string;
  birthday?: Date;
  type: Gender;
  status?: boolean;

  constructor(fields?: {
    firstName: string,
    lastName: string,
    birthday?: Date,
    type: Gender,
    status?: boolean
  }) {
    this.firstName = fields.firstName;
    this.lastName = fields.lastName;
    this.birthday = fields.birthday;
    this.type = fields.type;
    this.status = fields.status || false;
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  toString(): any {
    return this.firstName + ' ' + this.lastName;
  }
}

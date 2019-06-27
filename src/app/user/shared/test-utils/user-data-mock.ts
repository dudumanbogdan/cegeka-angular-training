import {UserModel} from '../models/user.model';
import {Gender} from '../enums/gender';

export class MockData {
  static getMockUser(firstName: string, lastName: string) {
    return new UserModel({id: 14, firstName: firstName, lastName: lastName, type: Gender.Female});
  }
}

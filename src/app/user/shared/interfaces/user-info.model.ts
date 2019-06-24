import { Gender } from '../enums/gender';

export interface UserInfoModel {
  firstName: string;
  lastName: string;
  birthday?: Date;
  type: Gender;
}

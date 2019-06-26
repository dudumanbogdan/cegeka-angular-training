import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {UserModel} from '../shared/models/user.model';
import {Gender} from '../shared/enums/gender';
import {CreateUserStateService} from '../shared/services/create-user-state.service';

@Component({
  selector: 'app-create-user-info',
  templateUrl: './create-user-info.component.html',
  styleUrls: ['./create-user-info.component.scss']
})
export class CreateUserInfoComponent implements OnInit {
  userInfo: UserModel = new UserModel();
  genders = [Gender.Male, Gender.Female];

  constructor(private userInfoService: UserService, private createUserStateService: CreateUserStateService) { }

  ngOnInit() {
  }

  addUserInfo(formValues: any) {
    this.userInfoService.addUserInfo(formValues);
    this.createUserStateService.onCreateUser(formValues);
  }

  isFormValid(formStatus) {
    return formStatus.status === 'INVALID';
  }
}


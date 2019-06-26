import {Component, OnInit} from '@angular/core';

import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Gender} from '../shared/enums/gender';
import {UserService} from '../shared/services/user.service';
import {UserModel} from '../shared/models/user.model';
import {CreateUserStateService} from '../shared/services/create-user-state.service';

@Component({
  selector: 'app-create-user-info-reactive',
  templateUrl: './create-user-info-reactive.component.html',
  styleUrls: ['./create-user-info-reactive.component.scss']
})
export class CreateUserInfoReactiveComponent implements OnInit {
  createUserForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  birthday: FormControl;
  gender: FormControl;

  genders = [Gender.Male, Gender.Female];

  constructor(
    private userInfoService: UserService,
    private formBuilder: FormBuilder,
    private createUserStateService: CreateUserStateService) {

  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.firstName = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.lastName = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.birthday = new FormControl('', [Validators.required]);
    this.gender = new FormControl('', [Validators.required]);

    this.createUserForm = this.formBuilder.group({
      name: this.formBuilder.group({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      details: this.formBuilder.group({
        birthday: this.birthday,
        gender: this.gender
      })
    });
  }

  canDeactivate() {
    if (this.createUserForm.dirty) {
      return window.confirm('Discard changes?');
    }
  }

  addUserInfo(formValues: any) {
    console.log(formValues.details);
    this.userInfoService.addUserInfo(
      new UserModel({
        id: Math.random(),
        firstName: formValues.name.firstName,
        lastName: formValues.name.lastName,
        birthday: formValues.details.birthday,
        type: formValues.details.gender
      }));
    this.createUserStateService.onCreateUser(formValues);
  }

  isFormValid(formStatus) {
    return formStatus.status === 'INVALID';
  }

  validateFirstName() {
    return this.firstName.valid || !(this.firstName.touched || (this.firstName.touched && this.firstName.value === this.lastName.value));
  }

  validateLastName() {
    return this.lastName.valid || !(this.lastName.touched || (this.lastName.touched && this.firstName.value === this.lastName.value));
  }

  validateBirthday() {
    return this.birthday.valid || !this.birthday.touched;
  }

  validateGender() {
    return this.gender.valid || !this.gender.touched;
  }
}

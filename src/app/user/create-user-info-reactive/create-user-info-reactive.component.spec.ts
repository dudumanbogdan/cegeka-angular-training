import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateUserInfoReactiveComponent} from './create-user-info-reactive.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('CreateUserInfoReactiveComponent', () => {
  let component: CreateUserInfoReactiveComponent;
  let fixture: ComponentFixture<CreateUserInfoReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUserInfoReactiveComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserInfoReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should form be invalid', () => {
    expect(component.createUserForm.valid).toBeFalsy();
  });

  it('should firstName be invalid when empty', () => {
    const firstName = component.createUserForm.get('name.firstName');

    expect(firstName.valid).toBeFalsy();
  });

  it('should firstName be valid when data length > 3', () => {

    const firstNameFc = component.createUserForm.get('name.firstName');
    firstNameFc.setValue('abcd');

    expect(firstNameFc.valid).toBeTruthy();
  });

  it('should firstName be invalid when data length less than 3', () => {

    const firstNameFc = component.createUserForm.get('name.firstName');
    firstNameFc.setValue('ab');

    expect(firstNameFc.valid).toBeFalsy();
  });
});

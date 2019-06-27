import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {CreateUserInfoReactiveComponent} from './create-user-info-reactive.component';

describe('CreateUserInfoReactiveComponent', () => {
  let component: CreateUserInfoReactiveComponent;
  let fixture: ComponentFixture<CreateUserInfoReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserInfoReactiveComponent ]
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
    expect(true).toBeFalsy();
  });

  it('should firstName be invalid when empty', () => {
    expect(true).toBeFalsy();
  });

  it('should firstName be valid when data length > 3', () => {
    expect(true).toBeFalsy();
  });
});

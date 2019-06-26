import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserInfoComponent } from './create-user-info.component';

describe('CreateUserInfoComponent', () => {
  let component: CreateUserInfoComponent;
  let fixture: ComponentFixture<CreateUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

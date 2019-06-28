import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserListComponent} from './user-list.component';
import {Router} from '@angular/router';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {FilterDatePipe} from '../../shared/pipes/filter-date.pipe';
import {RouterStub} from '../shared/test-utils/router-stub';
import {RouterTestingModule} from '@angular/router/testing';
import {UserService} from '../shared/services/user.service';
import {MockUserModelInfoService} from '../shared/test-utils/user-info-mock.service';
import {UserInfoComponent} from '../user-info/user-info.component';
import {CreateUserStateService} from '../shared/services/create-user-state.service';
import SpyObj = jasmine.SpyObj;
import {of} from 'rxjs';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let routerStub: Router;
  let createUserStateService: SpyObj<CreateUserStateService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent, UserInfoComponent, FilterDatePipe],
      imports: [RouterTestingModule],
      providers: [
        {provide: UserService, useClass: MockUserModelInfoService},
        { provide: Router, useClass: RouterStub },
        { provide: CreateUserStateService, useValue: jasmine.createSpyObj('CreateUserStateService', ['createUserSource$'])},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    createUserStateService = TestBed.get(CreateUserStateService);
    createUserStateService.createUserSource$.and.returnValue(of(''));
    routerStub = fixture.debugElement.injector.get(Router);

    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function getUserInfoContainer() {
    return fixture.debugElement.queryAll(By.css('app-user-info'));
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render *app-user-info* when mock returns at least one item', () => {
    const elem: DebugElement[] = getUserInfoContainer();
    console.log(elem[0].nativeElement);

    expect(elem.length).toBeGreaterThan(0);
  });

  it('should render **app-user-info** with *active* class when isActive router is true', () => {
    const elem: DebugElement[] = getUserInfoContainer();
    spyOn(routerStub, 'isActive').and.returnValue(true);

    fixture.detectChanges();

    expect(elem[0].classes.active).toBe(true);
  });

  it('should render **app-user-info** without *active* class when isActive router is false', () => {
    const elem: DebugElement[] = getUserInfoContainer();
    spyOn(routerStub, 'isActive').and.returnValue(false);

    fixture.detectChanges();

    expect(elem[0].classes.active).toBe(false);
  });
});

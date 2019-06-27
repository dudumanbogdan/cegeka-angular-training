import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserListComponent} from './user-list.component';
import {Router} from '@angular/router';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {FilterDatePipe} from '../../shared/pipes/filter-date.pipe';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let routerStub: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent, FilterDatePipe],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
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

    expect(elem.length).toBeGreaterThan(0);
  });

  it('should render **app-user-info** with *active* class when isActive router is true', () => {
    const elem: DebugElement[] = getUserInfoContainer();
    spyOn(routerStub, 'isActive').and.returnValue(true);

    expect(false).toBe(true);
  });

  it('should render **app-user-info** without *active* class when isActive router is false', () => {

  });
});

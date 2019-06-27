import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserInfoComponent} from './user-info.component';
import {DebugElement} from '@angular/core';
import {Router} from '@angular/router';
import {UserModel} from '../shared/models/user.model';
import {By} from '@angular/platform-browser';
import {RouterStub} from '../shared/test-utils/router-stub';
import {MockData} from '../shared/test-utils/user-data-mock';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;
  let routerStub: Router;
  let userInfo: UserModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfoComponent],
      providers: [{provide: Router, useClass: RouterStub},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    routerStub = fixture.debugElement.injector.get(Router);

    userInfo = MockData.getMockUser('John', 'Bravo');
    component.userInfo = userInfo;

    fixture.detectChanges();
  });

  function getUserInfoContainer(): DebugElement {
    return fixture.debugElement.query(By.css('.userInfoContainer'));
  }

  function getOfflineSvgIconContainer(): DebugElement {
    return fixture.debugElement.query(By.css('.offlineSvgIconUser'));
  }

  function getOnlineSvgIconContainer(): DebugElement {
    return fixture.debugElement.query(By.css('.onlineSvgIconUser'));
  }

  it('should component be created', () => {
    expect(component).toBeTruthy();
  });

  it('should **onUserInfoClick** event been called on container click', () => {
    const elem: DebugElement = getUserInfoContainer();
    spyOn(component, 'onUserInfoClick');

    elem.nativeElement.click();

    fixture.whenStable().then(() => {
      expect(component.onUserInfoClick).toHaveBeenCalled();
    });
  });

  it('should **router navigate** event been called on container click', () => {
    const elem: DebugElement = getUserInfoContainer();

    elem.nativeElement.click();

    fixture.whenStable().then(() => {
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });

  it('should render firstName', () => {
    const elem: DebugElement = getUserInfoContainer();

    expect(elem.nativeElement.textContent).toContain(userInfo.firstName);
  });

  it('should render lastName', () => {
    const elem: DebugElement = getUserInfoContainer();

    expect(elem.nativeElement.textContent).toContain(userInfo.lastName);
  });

  it('should render firstName and lastName sepparated by minus character', () => {
    const elem: DebugElement = getUserInfoContainer();

    expect(elem.nativeElement.textContent).toContain(`${userInfo.firstName} - ${userInfo.lastName}`);
  });

  it('should render with offline svg icon when status is false', () => {
    const elem: DebugElement = getOfflineSvgIconContainer();

    userInfo.status = false;

    expect(elem.nativeElement).toBeTruthy();
  });

  it('should not render with offline svg icon when status is true', () => {
    userInfo.status = true;
    component.userInfo = userInfo;
    fixture.detectChanges();

    const elem: DebugElement = getOfflineSvgIconContainer();

    expect(elem).toBeFalsy();
  });

  it('should render with online svg icon when status is true', () => {
    userInfo.status = true;
    component.userInfo = userInfo;
    fixture.detectChanges();

    const elem: DebugElement = getOnlineSvgIconContainer();

    expect(elem.nativeElement).toBeTruthy();
  });

  it('should not render with online svg icon when status is false', () => {
    userInfo.status = false;
    component.userInfo = userInfo;
    fixture.detectChanges();

    const elem: DebugElement = getOnlineSvgIconContainer();

    expect(elem).toBeFalsy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserChatComponent} from './user-chat.component';
import {ActivatedRoute, Router} from '@angular/router';
import {RouterStub} from '../shared/test-utils/router-stub';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRouteMock} from '../shared/test-utils/activated-route-mock';

describe('UserChatComponent', () => {
  let component: UserChatComponent;
  let fixture: ComponentFixture<UserChatComponent>;
  let activatedRouteMock: ActivatedRouteMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChatComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        {
          provide: ActivatedRoute,
          useClass: ActivatedRouteMock
        }
      ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChatComponent);
    component = fixture.componentInstance;
    activatedRouteMock = TestBed.get(ActivatedRoute);
    activatedRouteMock.snapshot.data = {};
    activatedRouteMock.snapshot.data.chatUser = {};

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {UserListComponent} from './user/user-list/user-list.component';
import {FilterDatePipe} from './shared/pipes/filter-date.pipe';
import {UserInfoComponent} from './user/user-info/user-info.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserListComponent,
        UserInfoComponent,
        FilterDatePipe
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'cegeka-angular-training'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('cegeka-angular-training');
  });
});

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserInfoComponent} from './user-info/user-info.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserChatComponent} from './user-chat/user-chat.component';
import {CreateUserInfoComponent} from './create-user-info/create-user-info.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {CreateUserStateService} from './shared/services/create-user-state.service';

@NgModule({
  declarations: [
    UserInfoComponent,
    UserListComponent,
    UserChatComponent,
    CreateUserInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    CreateUserStateService
  ],
  exports: [UserListComponent]
})
export class UserModule {
}

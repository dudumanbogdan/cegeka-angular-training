import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserInfoComponent} from './user-info/user-info.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserChatComponent} from './user-chat/user-chat.component';
import {CreateUserInfoComponent} from './create-user-info/create-user-info.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {CreateUserStateService} from './shared/services/create-user-state.service';
import {CreateUserInfoReactiveComponent} from './create-user-info-reactive/create-user-info-reactive.component';
import {DeactivateCreateUserGuard} from './shared/guards/deactivate-create-user.guard';

@NgModule({
  declarations: [
    UserInfoComponent,
    UserListComponent,
    UserChatComponent,
    CreateUserInfoComponent,
    CreateUserInfoReactiveComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    CreateUserStateService,
    DeactivateCreateUserGuard
  ],
  exports: [UserListComponent]
})
export class UserModule {
}

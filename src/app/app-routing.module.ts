import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserChatComponent} from './user/user-chat/user-chat.component';
import {CreateUserInfoComponent} from './user/create-user-info/create-user-info.component';
import {UserResolverGuard} from './user/shared/guards/user-resolver-guard.service';
import {CreateUserInfoReactiveComponent} from './user/create-user-info-reactive/create-user-info-reactive.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'chat/:id', component: UserChatComponent, resolve: {chatUser: UserResolverGuard}},
  {path: 'createUserTemplate', component: CreateUserInfoComponent},
  {path: 'createUserReactive', component: CreateUserInfoReactiveComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

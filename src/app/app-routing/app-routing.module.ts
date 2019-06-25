import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserChatComponent} from '../user/user-chat/user-chat.component';
import {UserResolverGuard} from '../user/shared/guards/user-resolver-guard.service';
import {HomeComponent} from '../home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'chat/:id', component: UserChatComponent, resolve: {chatUser: UserResolverGuard}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

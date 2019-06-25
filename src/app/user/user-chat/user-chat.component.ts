import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserModel} from '../shared/models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss']
})
export class UserChatComponent implements OnInit, OnDestroy {

  chatUser: UserModel;
  sub: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe((event) => {
      this.chatUser = this.activatedRoute.snapshot.data.chatUser as UserModel;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../shared/models/user.model';
import {Gender} from '../shared/enums/gender';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() userInfo: UserModel;

  GenderType: typeof Gender = Gender;

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  onUserInfoClick(id: number) {
    this.router.navigate(['chat', id]);
  }
}

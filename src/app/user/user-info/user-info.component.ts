import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../shared/models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() userInfo: UserModel;

  constructor() { }

  ngOnInit() {

  }

}

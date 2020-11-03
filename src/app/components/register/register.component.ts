import {Component, OnInit} from '@angular/core';
import {RegisterAccount} from '../Model/register-account';
import {AccountStatus} from '../Model/account-status';
import {AccountType} from '../Model/accountType';
import {RegisterService} from '../../service/register.service';
import {Avatar} from '../Model/avatar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  accountStatus: AccountStatus = AccountStatus.ACTIVE;
  accountType: AccountType = AccountType.PUBLIC;
  avatar: Avatar = {path: ''};
  isPrivate: boolean;
  imagePath = "assets/img/bussiness-man.png";

  user: RegisterAccount = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatar: this.avatar,
    displayName: '',
    accountStatus: this.accountStatus,
    accountType: this.accountType
  };

  constructor(private  registerService: RegisterService) {

  }

  ngOnInit(): void {
    this.user.username = '';
    this.user.email = '';
    this.user.password = '';
    this.user.confirmPassword = '';
    this.user.avatar.path = this.imagePath;
    this.user.displayName = '';
    this.accountStatus = AccountStatus.ACTIVE;
    this.user.accountType = this.accountType;
    this.accountType = AccountType.PUBLIC;
  }

  onSubmit(): void {
    this.registerService.registerUser(this.user).subscribe(response => console.log(response));
    console.log(this.user);
  }

  setAvatar(): void {
    this.avatar.path = this.imagePath
  }
}

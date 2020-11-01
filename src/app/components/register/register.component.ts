import {Component, Input, OnInit} from '@angular/core';
import {RegisterAccount} from '../Model/register-account';
import {AccountStatus} from '../Model/account-status';
import {AccountType} from '../Model/accountType';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: RegisterAccount = {
    email:'',
    password:'',
    confirmPassword:'',
    avatar:null,
    displayName:'',
    status :'',
    accountType:AccountType.PUBLIC,
    accountStatus: AccountStatus.ACTIVE,
    username:''
  };
  accountType: AccountType;
  accountStatus: AccountStatus
  isPrivate: boolean;
  constructor() {

  }

  ngOnInit(): void {
    this.user.email='';
    this.user.password='';
    this.user.confirmPassword='';
    this.user.avatar.id=null;
    this.user.avatar.path='';
    this.user.displayName='';
    this.user.status =  this.accountStatus;
    this.user.accountType = this.accountType;
    this.accountType= AccountType.PUBLIC;
    this.accountStatus= AccountStatus.ACTIVE;
  }

  onSubmit() {
    console.log(this.user);
  }
}

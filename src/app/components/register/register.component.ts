import {Component, Input, OnInit} from '@angular/core';
import {RegisterAccount} from '../Model/register-account';
import {AccountStatus} from '../Model/account-status';
import {AccountType} from '../Model/accountType';
import {RegisterService} from '../../service/register.service';


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
  accountStatus: AccountStatus
  isPrivate: boolean;
  constructor(private  registerService: RegisterService) {

  }

  ngOnInit(): void {
    this.user.email='';
    this.user.password='';
    this.user.confirmPassword='';
    this.user.avatar.path='';
    this.user.displayName='';
    this.user.status =  this.accountStatus;
    this.accountStatus= AccountStatus.ACTIVE;
    this.user.accountType = AccountType.PUBLIC;
  }

  onSubmit() {
    this.registerService.registerUser(this.user).subscribe(response =>console.log(response))
    console.log(this.user);
  }
}

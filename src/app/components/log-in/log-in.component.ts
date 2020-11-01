import { Component, OnInit } from '@angular/core';
import {LogInAccount} from '../Model/log-in-account';
import {LoginServiceService} from '../../service/login-service.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  user:LogInAccount = {
    email:'',
    password:''
  };
  constructor(private loginService: LoginServiceService) { }

  ngOnInit(): void {
  this.user.email='';
  this.user.password='';
  }

  submit() {
    this.loginService.loginUser(this.user).subscribe(response =>console.log(response))
    console.log(this.user);
  }
}

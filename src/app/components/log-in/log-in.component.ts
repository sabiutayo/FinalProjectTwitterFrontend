import { Component, OnInit } from '@angular/core';
import {LogInAccount} from '../Model/log-in-account';
import {LoginServiceService} from '../../service/login-service.service';
import {register} from 'ts-node';
import {Router} from '@angular/router';


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
  constructor(private loginService: LoginServiceService, private router: Router) { }

  ngOnInit(): void {

  }

  submit() {
    this.loginService.loginUser(this.user).subscribe(response =>console.log(response))
    this.loginService.loginUser(this.user)
      .subscribe(data => {
        this.router.navigate(['/home', this.user]);
      });

  }

}

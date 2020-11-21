import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { UserData } from 'src/app/models/userData';
import {LoginForm} from '../../models/loginForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  loginError = false;

  constructor(private httpService: HttpService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    if (this.loginService.checkLoggedIn()){
      console.log('navigating directly');
      this.router.navigateByUrl('users/me');
    }
  }

  async onSubmit(): Promise<void> {
    const { email, password } = this.loginForm.value;
    const loginData = new LoginForm(email, password);
    try {
      const data: UserData = await this.httpService.loginUser(loginData);
      this.loginError = false;
      this.loginService.setLoginUser(data);
      await this.router.navigateByUrl('users/me');
    } catch (e) {
      this.loginError = true;
      setTimeout(() => {
        this.loginError = false;
      }, 10000);

    }
    this.loginForm.reset();
  }

  switchToRegister(): void{
    this.router.navigateByUrl('register');
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { map } from 'rxjs/operators';
import { RegisterForm } from 'src/app/models/registerForm';
import { UserData } from 'src/app/models/userData';
import { LoginService } from 'src/app/service/login.service';
import {Avatar} from '../../models/avatar';
import {AccountType} from '../../models/accountType';
import {AccountStatus} from '../../models/account-status';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(7)],
      asyncValidators: this.usernameNotTaken.bind(this)
    }),
    displayname: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur',
      asyncValidators: this.emailNotTaken.bind(this)
    }),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(7)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(7)
    ])
  });
  accountStatus: AccountStatus = AccountStatus.ACTIVE;
  accountType: AccountType = AccountType.PUBLIC;
  avatar: Avatar = {path: '/assets/img/businessman.png'};
  isPrivate: boolean;
  imagePath = 'assets/img/businessman.png';

  constructor(private router: Router, private httpService: HttpService, private loginService: LoginService) { }

  ngOnInit() {
  }

  switchToLogin() {
    this.router.navigateByUrl('login');
  }

  async onRegister() {
    if (this.registerForm.get('password').value === this.registerForm.get('confirmPassword').value) {
      try {
        const { username, password, email, displayname, accountType , accountStatus, avatar, confirmPassword } = this.registerForm.value;
        const registerData = new RegisterForm(username, password, email, displayname, accountType , accountStatus, avatar, confirmPassword);
        const userData: UserData = await  this.httpService.registerUser(registerData);
        await this.router.navigateByUrl('users/me');
      } catch (e) {
        console.log(e);
        alert('Something went wrong while creating user!');
      }
    } else {
      alert('Password and Confirm Password has to be the same!');
    }
  }

  usernameNotTaken(control: AbstractControl) {
    return this.httpService.chechUsername(control.value).pipe(
      map(res => {
        return res ? { usernameTaken: true } : null;
      })
    );
  }

  emailNotTaken(control: AbstractControl) {
    return this.httpService.checkEmailAddress(control.value).pipe(
      map(res => {
        return res ? { emailTaken: true } : null;
      })
    );
  }
  setAvatar(): void {
    this.avatar.path = this.imagePath;
  }
}

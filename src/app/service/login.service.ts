import {Injectable} from '@angular/core';
import {UserData} from '../models/userData';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment.prod';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser: UserData;

  constructor(private cookieService: CookieService, private router: Router) {
  }

  deleteCookie(): void {
    localStorage.removeItem(environment.cookieName);
  }

  checkCookieExists(): boolean {
    return localStorage.getItem(environment.cookieName) !== null;
  }

  setCookie(cookieValue): void {
    localStorage.setItem(environment.cookieName, cookieValue);
  }

  getCookie(): string {
    return localStorage.getItem(environment.cookieName);
  }

  checkLoggedIn(): boolean {
    // console.log(this.getCookie())
    if (this.currentUser && this.currentUser.token) {
      return true;
    } else if (this.checkCookieExists() && this.getCookie() !== null) {
      return true;
    }
    return false;
  }

  setLoginUser(userData: UserData): void {
    this.currentUser = userData;
    if (this.checkCookieExists()) {
      this.deleteCookie();
    }
    this.setCookie(this.currentUser.token);
    this.setUserId(this.currentUser.user.id);
  }

  logout(): void {
    this.deleteCookie();
    this.deleteUserId();
    this.currentUser = undefined;
    this.router.navigateByUrl('login');
  }

  deleteUserId(): void {
    localStorage.removeItem(environment.localStorageUserID)
  }

  checkUserIdExists(): boolean {
    return localStorage.getItem(environment.localStorageUserID) !== null;
  }

  setUserId(userIdValue): void {
    localStorage.setItem(environment.localStorageUserID, userIdValue);
  }

  getUserId(): string {
    return localStorage.getItem(environment.localStorageUserID);
  }
}

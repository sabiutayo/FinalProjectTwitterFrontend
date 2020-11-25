import {Injectable} from '@angular/core';
import {UserData} from '../models/userData';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser: UserData;

  constructor(private router: Router) {
  }

  checkLoggedIn(): boolean {
    if (this.currentUser && this.currentUser.token) {
      return true;
    } else {
    return false;
    }
  }

  setLoginUser(userData: UserData): void {
    this.currentUser = userData;
    this.setUserId(this.currentUser.user.id);
  }

  logout(): void {
    this.deleteUserId();
    this.currentUser = undefined;
    this.router.navigateByUrl('login');
  }

  deleteUserId(): void {
    localStorage.removeItem(environment.localStorageUserID);
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

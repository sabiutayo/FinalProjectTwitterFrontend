import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegisterForm} from '../models/registerForm';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl = 'http://localhost:8080/api/register';

  constructor(private http: HttpClient) {
  }

  registerUser(user: RegisterForm): Observable<RegisterForm> {
    return this.http.post<RegisterForm>(this.baseUrl, user);
  }
}

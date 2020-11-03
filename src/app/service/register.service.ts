import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {config, Observable, of, throwError} from 'rxjs';
import {RegisterAccount} from '../components/Model/register-account';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl = 'http://localhost:8080/api/register';

  constructor(private http: HttpClient) {
  }

  registerUser(user: RegisterAccount): Observable<RegisterAccount> {
    return this.http.post<RegisterAccount>(this.baseUrl, user);
  }
}

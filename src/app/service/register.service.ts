import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {config, Observable, of, throwError} from 'rxjs';
import {RegisterAccount} from '../components/Model/register-account';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) {
  }

  registerUser(user: RegisterAccount):Observable<RegisterAccount> {
    /** POST: add a new user to the database */
    console.log(JSON.stringify(user))
    return this.http.post<RegisterAccount>(`localhost:8080/api/register`,  JSON.stringify(user));

  }
}

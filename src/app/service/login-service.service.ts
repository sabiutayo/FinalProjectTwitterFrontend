import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LogInAccount} from '../components/Model/log-in-account';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) {
  }

  loginUser(user: LogInAccount): Observable<LogInAccount> {
    /** POST: add a new user to the database */
    console.log(JSON.stringify(user));
    return this.http.post<LogInAccount>(`localhost:8080/api/login`, JSON.stringify(user));
  }
}

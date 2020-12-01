import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Posts} from '../components/Model/Posts';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>('http://localhost:8080/api/MariusTarnaru/entries');
  }
}

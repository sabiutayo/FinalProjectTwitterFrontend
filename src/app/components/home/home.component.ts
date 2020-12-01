import { Component, OnInit } from '@angular/core';
import {Posts} from '../Model/Posts';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HomeService} from '../../service/home.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //entries: Posts[];
  entries: Posts = {
    entryId: <number> 2,
    content: '',
    link: '',
    imagePath:'',
    //createdDate: ,
    status: 'ACTIVE',
    type: 'PUBLIC'
  };
  entries$: Observable<Posts[]> = this.service.getAllPosts();
  trustedUrl: 'entry.link';

  constructor(private service: HomeService, private sanitizer: DomSanitizer) {
    this.sanitizer.bypassSecurityTrustUrl(this.trustedUrl);
  }

  ngOnInit(): void {
  }

  getUser() {

  }
}

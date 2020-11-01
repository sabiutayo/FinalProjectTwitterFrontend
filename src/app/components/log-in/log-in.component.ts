import { Component, OnInit } from '@angular/core';
import {LogInAccount} from '../Model/log-in-account';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  user: LogInAccount;

  constructor() { }

  ngOnInit(): void {
  }

}

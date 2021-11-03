import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  production: boolean = environment.production;
  env: string = environment.env;

  constructor() { }

  ngOnInit(): void {
  }

}

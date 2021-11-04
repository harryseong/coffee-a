import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/services/api/api.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  coffeeMakers$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadCoffeeMakers()
  }

  private loadCoffeeMakers() {
    this.apiService.getCoffeeMakers().toPromise()
      .then(items => {this.coffeeMakers$.next(items);})
      .catch(() => console.warn('There was an issue fetching coffee makers from AWS DynamoDB.'));
  }
}

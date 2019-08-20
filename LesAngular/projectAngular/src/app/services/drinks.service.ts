import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {share} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  readonly DRINKS_URL = 'http://localhost:3000/drinks/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })

  };

  constructor(private http: HttpClient) {
  } 

  getDrinks() {
    return this.http.get<any>(this.DRINKS_URL);
  }

  getDrink(id) {
    console.log(this.DRINKS_URL + id);
    return this.http.get<any>(this.DRINKS_URL + id);
  }

  addDrink(drink) {
    return this.http.post<any>(this.DRINKS_URL, drink, this.httpOptions);
  }

  updateDrink(drink, id) {
    return this.http.patch<any>(this.DRINKS_URL + id, drink, this.httpOptions);
  }

  deleteDrink(drink) {
    console.log(this.DRINKS_URL + drink);
    return this.http.delete<any>(this.DRINKS_URL + drink, this.httpOptions).toPromise();
  }
}

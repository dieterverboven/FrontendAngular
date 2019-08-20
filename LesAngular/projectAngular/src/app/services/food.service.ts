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
export class FoodService {

  readonly FOOD_URL = 'http://localhost:3000/food/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })

  };

  constructor(private http: HttpClient) {
  } 

  getFood() {
    return this.http.get<any>(this.FOOD_URL);
  }

  getFoodItem(id) {
    console.log(this.FOOD_URL + id);
    return this.http.get<any>(this.FOOD_URL + id);
  }

  addFood(food) {
    return this.http.post<any>(this.FOOD_URL, food, this.httpOptions);
  }

  updateFood(food, id) {
    return this.http.patch<any>(this.FOOD_URL + id, food, this.httpOptions);
  }

  deleteFood(food) {
    console.log(this.FOOD_URL + food);
    return this.http.delete<any>(this.FOOD_URL + food, this.httpOptions).toPromise();
  }
}

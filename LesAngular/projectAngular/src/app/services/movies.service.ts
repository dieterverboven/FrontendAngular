import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';  
import { EMPTY, Observable } from 'rxjs';
import { catchError, share, tap } from 'rxjs/operators';

interface myData {
  results: Object;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  readonly API_KEY = "2f67e228131ca6b7fb0ade1cc12a2705";
  readonly POPULAR_URL = "https://api.themoviedb.org/3/movie/popular?api_key=";
  readonly NEWEST_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=";
  readonly INFO_URL = "https://api.themoviedb.org/3/movie/";

  constructor(private http: HttpClient) { }

   getPopular(){

    return this.http.get<myData>(this.POPULAR_URL + this.API_KEY)
      
  }

  getUpcoming(){

    return this.http.get<myData>(this.NEWEST_URL + this.API_KEY)
      
  }

  getInfo(movieId)
  {

    return this.http.get<myData>(this.INFO_URL + movieId + "?api_key=" + this.API_KEY)

  }
}

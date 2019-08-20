import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../services/movies.service";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {

  popular: Object;
  upcoming: Object;
  constructor(private router: Router, private data: MoviesService) { }

  ngOnInit() {
    this.data.getPopular().subscribe(data => {
      this.popular = data.results;
      console.log("Popular movies: ", data.results);
    });

    this.data.getUpcoming().subscribe(movies => {
      this.upcoming = movies.results;
      console.log("Newest releases: ", movies.results)
    });
  }

  getInfo(movieId){
    this.router.navigate(['/info/' + movieId]);
  }

  orderTicket(movieId){
    this.router.navigate(['/order/' + movieId]);
  }
}

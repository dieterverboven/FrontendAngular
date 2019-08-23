import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, empty } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  movie: Object;
  movies: Object[] = [];
  tickets: Object[] = [];

  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit() {
    this.readLocalStorage();
    this.getAllMovies();
  }

  readLocalStorage(){
    const tickets = localStorage.getItem('tickets');
    if (tickets !== null) {
      this.tickets = JSON.parse(tickets);
    }
  }

  getAllMovies(){
    if (this.tickets.length != 0) {
      for(let i=0; i < this.tickets.length; i++){
        console.log(this.tickets[i].toString());
        this.movieService.getInfo(this.tickets[i].toString()).subscribe(data => this.movie = data);
        console.log(this.movie);
      }
    }
  }
}

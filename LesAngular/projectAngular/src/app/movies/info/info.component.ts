import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {MoviesService} from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: []
})
export class InfoComponent implements OnInit {
  id: string;
  movie: Object;

  constructor( private route: ActivatedRoute, private movieService: MoviesService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.movieService.getInfo(this.id).subscribe(data => this.movie = data);
  }
}

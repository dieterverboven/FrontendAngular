import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { DrinksService } from "../../services/drinks.service";
import { FoodService } from "../../services/food.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  id: string;
  movie: Object;
  drinks$: Observable<any>;
  food$: Observable<any>;
  orderDrinks$: Observable<any>[];
  orderFood$: Observable<any>;

  constructor(private route: ActivatedRoute, private movieService: MoviesService, private router: Router, private drinksService: DrinksService, private foodService: FoodService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.movieService.getInfo(this.id).subscribe(data => this.movie = data);

    this.getAllDrinks();
    this.getAllFood();
  }

  getAllDrinks(){
    this.drinks$ = this.drinksService.getDrinks();
    
    this.drinks$.subscribe(data => {
      console.log("All drinks: ", data);
    });
  }

  getAllFood(){
    this.food$ = this.foodService.getFood();
    
    this.food$.subscribe(data => {
      console.log("All food: ", data);
    });
  }

  addDrinkToOrder(drinkId){
    
  }

  addFoodToOrder(foodId){

  }
}

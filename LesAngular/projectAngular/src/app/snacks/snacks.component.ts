import { Component, OnInit } from '@angular/core';
import { DrinksService } from "../services/drinks.service";
import { FoodService } from "../services/food.service";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styles: []
})
export class SnacksComponent implements OnInit {

  drinks$: Observable<any>;

  drink = {
    name: "",
    price: "",
    size: ""
  }

  food$: Observable<any>;

  food = {
    name: "",
    price: ""
  }

  constructor(private router: Router, private drinksService: DrinksService, private foodService: FoodService) { }

  ngOnInit() {
    this.getAllDrinks();
    this.getAllFood();
  }

  getAllDrinks(){
    this.drinks$ = this.drinksService.getDrinks();
    
    this.drinks$.subscribe(data => {
      console.log("All drinks: ", data);
    });
  }

  addDrink(form) {
    this.drinksService.addDrink(form).subscribe(value => console.log(value));
    this.getAllDrinks();
  }

  updateDrink(id) {
    this.router.navigate(['/drink/' + id]);
    this.getAllDrinks();
  }

  deleteDrink(id){
    if (confirm('Are you sure?')) {
      this.drinksService.deleteDrink(id);
      this.getAllDrinks();
    }
  }

  getAllFood(){
    this.food$ = this.foodService.getFood();
    
    this.food$.subscribe(data => {
      console.log("All food: ", data);
    });
  }
  
  addFood(form) {
    this.foodService.addFood(form).subscribe(value => console.log(value));
    this.getAllFood();
  }

  updateFood(id) {
    this.router.navigate(['/food/' + id]);
    this.getAllFood();
  }

  deleteFood(id){
    if (confirm('Are you sure?')) {
      this.foodService.deleteFood(id);
      this.getAllFood();
    }
  }
}

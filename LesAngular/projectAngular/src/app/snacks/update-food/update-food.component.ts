import { Component, OnInit } from '@angular/core';
import { FoodService } from "../../services/food.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.scss']
})
export class UpdateFoodComponent implements OnInit {

  constructor(private route: ActivatedRoute, private foodService: FoodService, private router: Router) { }
  id: string;
  food;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    console.log(this.id);
    this.foodService.getFoodItem(this.id).subscribe(data => this.food = data);
    console.log(this.food);
  }

  updateFood(form) {
    this.foodService.updateFood(form, this.id).subscribe(value => console.log(value));
    this.router.navigate(['snacks']);
  }
}

import { Component, OnInit } from '@angular/core';
import { DrinksService } from "../../services/drinks.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-drink',
  templateUrl: './update-drink.component.html',
  styleUrls: ['./update-drink.component.scss']
})
export class UpdateDrinkComponent implements OnInit {

  constructor(private route: ActivatedRoute, private drinksService: DrinksService, private router: Router) { }
  id: string;

  drink;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    console.log(this.id);
    this.drinksService.getDrink(this.id).subscribe(data => this.drink = data);
    console.log(this.drink);
  }

  updateDrink(form) {
    this.drinksService.updateDrink(form, this.id).subscribe(value => console.log(value));
    this.router.navigate(['snacks']);
  }

}

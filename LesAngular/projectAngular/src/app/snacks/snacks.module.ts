import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnacksComponent } from './snacks.component';
import { FormsModule } from '@angular/forms';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateDrinkComponent } from './update-drink/update-drink.component';
import { UpdateFoodComponent } from './update-food/update-food.component';

@NgModule({
  imports: [
    CommonModule,
    NgbTabsetModule,
    FormsModule
  ],
  declarations: [SnacksComponent, UpdateDrinkComponent, UpdateFoodComponent]
})
export class SnacksModule { }

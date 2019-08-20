import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SnacksComponent } from './snacks/snacks.component';
import { InfoComponent } from './movies/info/info.component';
import { OrderComponent } from './movies/order/order.component';
import { LoginComponent } from './login/login.component';
import { UpdateDrinkComponent } from './snacks/update-drink/update-drink.component';
import { UpdateFoodComponent } from './snacks/update-food/update-food.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'snacks', component: SnacksComponent},
  {path: 'info/:id', component: InfoComponent},
  {path: 'order/:id', component: OrderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'drink/:id', component: UpdateDrinkComponent},
  {path: 'food/:id', component: UpdateFoodComponent},

  // Homepage doorverwijzen naar home.
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // Niet gedefinieerde routes ook doorverwijzen.
  {path: '**', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

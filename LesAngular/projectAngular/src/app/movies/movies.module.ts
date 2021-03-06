import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoComponent } from './info/info.component';
import { OrderComponent } from './order/order.component';
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  imports: [
    CommonModule,
    NgbTabsetModule
    
  ],
  declarations: [MoviesComponent, InfoComponent, OrderComponent, TicketsComponent]
})
export class MoviesModule { }

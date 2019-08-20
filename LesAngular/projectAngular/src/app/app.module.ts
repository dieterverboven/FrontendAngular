import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgBootstrapModule} from './sharedModules/ng-bootstrap.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeModule } from './home/home.module';
import { MoviesModule } from './movies/movies.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { DrinksService } from './services/drinks.service';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnacksComponent } from './snacks/snacks.component';
import { SnacksModule } from './snacks/snacks.module';

// import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBootstrapModule,
    NgbModule,
    HttpClientModule, 
    HomeModule,
    MoviesModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    SnacksModule
  ],
  providers: [DrinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

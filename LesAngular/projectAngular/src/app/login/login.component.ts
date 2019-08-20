import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({
    naam:new FormControl(null),
    passwoord:new FormControl(null)

  });

  constructor() { }

  ngOnInit() {
  }

  login(form){
    if(!this.loginForm.valid){
      console.log('Invalid');
      return;
    }

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  isCollapsed = true; // true -> verberg menu, false -> toon menu

  constructor() { }

  ngOnInit() {
  }

}

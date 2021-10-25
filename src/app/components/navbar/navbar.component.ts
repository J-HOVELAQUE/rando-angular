import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  showDropdown = false;
  burgerActive = false;

  constructor() {}

  onToggleBurger() {
    this.burgerActive = !this.burgerActive;
  }

  onToggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  ngOnInit(): void {}
}

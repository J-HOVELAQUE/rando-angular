import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-select-participants',
  templateUrl: './select-participants.component.html',
  styleUrls: ['./select-participants.component.css'],
})
export class SelectParticipantsComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ParticipantRepoService } from 'src/app/services/participant-repo.service';

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

  constructor(private _participantRepo: ParticipantRepoService) {}

  onGetParticipants() {
    console.log('CLICK');
  }

  ngOnInit(): void {
    const request = this._participantRepo.getAllParticipants();

    request.subscribe(
      (response) => {
        console.log('LOADED', response);
      },
      (error) => {
        console.error('get participants failed', error);
      }
    );
  }
}

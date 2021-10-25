import { Component, OnInit } from '@angular/core';

import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-hiking-sheet',
  templateUrl: './hiking-sheet.component.html',
  styleUrls: ['./hiking-sheet.component.css'],
})
export class HikingSheetComponent implements OnInit {
  picture: string;

  constructor(public store: StoreService) {}

  ngOnInit(): void {
    if (this.store.activeHike?.place?.picture) {
      this.picture = this.store.activeHike.place.picture;
    } else {
      this.picture = '../../assets/montain_default.jpg';
    }
  }
}

import { Component, OnInit } from '@angular/core';

import { StoreService } from '../services/store.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-hiking-sheet',
  templateUrl: './hiking-sheet.component.html',
  styleUrls: ['./hiking-sheet.component.css'],
})
export class HikingSheetComponent implements OnInit {
  picture: string;
  openEditHikeModalSwitcher = new Subject<void>();

  constructor(public store: StoreService) {}

  onEditHike() {
    if (this.store.activeHike) {
      this.openEditHikeModalSwitcher.next();
    }
  }

  ngOnInit(): void {
    if (this.store.activeHike?.place?.picture) {
      this.picture = this.store.activeHike.place.picture;
    } else {
      this.picture = '../../assets/montain_default.jpg';
    }
  }
}

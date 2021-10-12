import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PlaceListComponent } from './place-list.component';
import { PlaceCardComponent } from './components/place-card/place-card.component';

@NgModule({
  declarations: [PlaceListComponent, PlaceCardComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [PlaceListComponent],
})
export class PlaceListModule {}

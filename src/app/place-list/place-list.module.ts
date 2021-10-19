import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PlaceListComponent } from './place-list.component';
import { PlaceCardComponent } from './components/place-card/place-card.component';
import { CreatePlaceModalComponent } from './components/create-place-modal/create-place-modal.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ChangePictureModalComponent } from './components/change-picture-modal/change-picture-modal.component';

@NgModule({
  declarations: [
    PlaceListComponent,
    PlaceCardComponent,
    CreatePlaceModalComponent,
    ChangePictureModalComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  exports: [PlaceListComponent],
})
export class PlaceListModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PlaceListComponent } from './place-list.component';
import { PlaceCardComponent } from './components/place-card/place-card.component';
import { CreatePlaceModalComponent } from './components/create-place-modal/create-place-modal.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ChangePictureModalComponent } from './components/change-picture-modal/change-picture-modal.component';
import { EditPlaceModalComponent } from './components/edit-place-modal/edit-place-modal.component';
import { ValidationModalComponent } from '../components/validation-modal/validation-modal.component';

@NgModule({
  declarations: [
    PlaceListComponent,
    PlaceCardComponent,
    CreatePlaceModalComponent,
    ChangePictureModalComponent,
    EditPlaceModalComponent,
    ValidationModalComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  exports: [PlaceListComponent],
})
export class PlaceListModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { PlaceListComponent } from './place-list.component';
import { PlaceCardComponent } from './components/place-card/place-card.component';
import { CreatePlaceModalComponent } from './components/create-place-modal/create-place-modal.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ChangePictureModalComponent } from './components/change-picture-modal/change-picture-modal.component';
import { EditPlaceModalComponent } from './components/edit-place-modal/edit-place-modal.component';
import { ValidationModalComponent } from '../components/validation-modal/validation-modal.component';
import { HikePopoverComponent } from './components/hike-popover/hike-popover.component';
import { CreateHikeModalComponent } from '../components/create-hike-modal/create-hike-modal.component';

import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { SetLocationModalComponent } from './components/set-location-modal/set-location-modal.component';
import { SetLocationMapComponent } from './components/set-location-map/set-location-map.component';
import { SelectParticipantsModule } from '../shared/select-participants/select-participants.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    PlaceListComponent,
    PlaceCardComponent,
    CreatePlaceModalComponent,
    ChangePictureModalComponent,
    EditPlaceModalComponent,
    ValidationModalComponent,
    HikePopoverComponent,
    CreateHikeModalComponent,
    SetLocationModalComponent,
    SetLocationMapComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbPopoverModule,
    LeafletModule,
    SelectParticipantsModule,
    MatProgressSpinnerModule,
  ],
  exports: [PlaceListComponent],
})
export class PlaceListModule {}

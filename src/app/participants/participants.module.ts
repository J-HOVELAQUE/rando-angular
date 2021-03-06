import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantsComponent } from './participants.component';
import { ParticipantsMenuComponent } from './components/participants-menu/participants-menu.component';
import { ParticipantDataComponent } from './components/participant-data/participant-data.component';
import { HikingListComponent } from './components/hiking-list/hiking-list.component';
import { TotalsComponent } from './components/totals/totals.component';
import { ElevationByTimeComponent } from './components/elevation-by-time/elevation-by-time.component';
import { DistanceByTimeComponent } from './components/distance-by-time/distance-by-time.component';

import { ParticipantsRoutingModule } from './participants-routing.module';
import { CreateParticipantModalComponent } from './components/create-participant-modal/create-participant-modal.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ParticipantsComponent,
    ParticipantsMenuComponent,
    ParticipantDataComponent,
    HikingListComponent,
    TotalsComponent,
    ElevationByTimeComponent,
    DistanceByTimeComponent,
    CreateParticipantModalComponent,
  ],
  imports: [
    CommonModule,
    ParticipantsRoutingModule,
    ChartsModule,
    ReactiveFormsModule,
  ],
  exports: [ParticipantsComponent],
})
export class ParticipantsModule {}

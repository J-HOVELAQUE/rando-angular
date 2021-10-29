import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantsComponent } from './participants.component';
import { ParticipantsMenuComponent } from './components/participants-menu/participants-menu.component';
import { ParticipantDataComponent } from './components/participant-data/participant-data.component';

@NgModule({
  declarations: [ParticipantsComponent, ParticipantsMenuComponent, ParticipantDataComponent],
  imports: [CommonModule],
  exports: [ParticipantsComponent],
})
export class ParticipantsModule {}

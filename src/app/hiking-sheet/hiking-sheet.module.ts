import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HikingSheetComponent } from './hiking-sheet.component';
import { EditHikeModalComponent } from './components/edit-hike-modal/edit-hike-modal.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SelectParticipantsModule } from '../shared/select-participants/select-participants.module';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [HikingSheetComponent, EditHikeModalComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    SelectParticipantsModule,
  ],
  exports: [HikingSheetComponent],
})
export class HikingSheetModule {}

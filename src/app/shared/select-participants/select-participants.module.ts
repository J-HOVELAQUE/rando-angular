import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { SelectParticipantsComponent } from './select-participants.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectParticipantsComponent],
  imports: [CommonModule, MatSelectModule, ReactiveFormsModule],
  exports: [SelectParticipantsComponent],
})
export class SelectParticipantsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceListComponent } from './place-list.component';

@NgModule({
  declarations: [PlaceListComponent],
  imports: [CommonModule],
  exports: [PlaceListComponent],
})
export class PlaceListModule {}

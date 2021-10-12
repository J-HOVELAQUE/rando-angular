import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceMapComponent } from './place-map.component';

@NgModule({
  declarations: [PlaceMapComponent],
  imports: [CommonModule],
  exports: [PlaceMapComponent],
})
export class PlaceMapModule {}

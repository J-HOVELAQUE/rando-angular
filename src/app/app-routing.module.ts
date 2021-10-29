import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceMapComponent } from './place-map/place-map.component';
import { HikingSheetComponent } from './hiking-sheet/hiking-sheet.component';
import { ParticipantsComponent } from './participants/participants.component';

const routes: Routes = [
  { path: 'place/map', component: PlaceMapComponent },
  { path: 'place/list', component: PlaceListComponent },
  { path: 'hike', component: HikingSheetComponent },
  { path: 'participant', component: ParticipantsComponent },
  { path: 'home', component: HomeComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HikingListComponent } from './components/hiking-list/hiking-list.component';
import { TotalsComponent } from './components/totals/totals.component';
import { ParticipantsComponent } from './participants.component';
import { ElevationByTimeComponent } from './components/elevation-by-time/elevation-by-time.component';
import { DistanceByTimeComponent } from './components/distance-by-time/distance-by-time.component';

const routes: Routes = [
  {
    path: 'participant',
    component: ParticipantsComponent,
    children: [
      {
        path: 'hikes',
        component: HikingListComponent,
      },
      {
        path: 'totals',
        component: TotalsComponent,
      },
      {
        path: 'elevation',
        component: ElevationByTimeComponent,
      },
      {
        path: 'distance',
        component: DistanceByTimeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ParticipantsRoutingModule {}

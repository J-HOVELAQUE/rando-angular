import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';

interface ITotals {
  totalHikes: number;
  totalElevation: number;
  totalDistance: number;
  totalDuration: number;
}

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css'],
})
export class TotalsComponent implements OnInit, OnDestroy {
  totals: ITotals;
  private _changeParticipantListener: Subscription;

  constructor(public store: StoreService) {}

  onCalculateTotals() {
    this.totals = this.store.participantData.data.reduce(
      (totals: ITotals, currentMonth) => {
        totals.totalHikes += currentMonth.nb_hike;
        totals.totalElevation += currentMonth.total_elev;
        totals.totalDistance += currentMonth.total_dist;
        totals.totalDuration += currentMonth.total_time;
        return totals;
      },
      { totalHikes: 0, totalElevation: 0, totalDistance: 0, totalDuration: 0 }
    );
  }

  ngOnInit(): void {
    this._changeParticipantListener = this.store.participantAsChanged.subscribe(
      () => {
        this.onCalculateTotals();
      }
    );
  }

  ngOnDestroy(): void {
    this._changeParticipantListener.unsubscribe();
  }
}

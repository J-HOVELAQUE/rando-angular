import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-elevation-by-time',
  templateUrl: './elevation-by-time.component.html',
  styleUrls: ['./elevation-by-time.component.css'],
})
export class ElevationByTimeComponent implements OnInit, OnDestroy {
  constructor(public store: StoreService) {}

  private _lookIfParticipantInStoreChange: Subscription;

  barChartData: ChartDataSets[];
  barChartLabels: Label[];

  barChartOptions = {
    responsive: true,
  };

  barChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'skyblue',
    },
  ];

  barChartLegend = true;
  barChartPlugins = [];

  initData() {
    this.barChartLabels = this.store.participantData.data.map((dataMonth) => {
      return `${dataMonth._id.month}/${dataMonth._id.year}`;
    });

    this.barChartData = [
      {
        data: this.store.participantData.data.map(
          (dataMonth) => dataMonth.total_elev
        ),
        label: `Dénivelé de ${this.store.participantData.participantFirstname} ${this.store.participantData.participantName} par mois en mètres`,
      },
    ];
  }

  ngOnInit(): void {
    this.initData();
    this._lookIfParticipantInStoreChange =
      this.store.participantAsChanged.subscribe(() => {
        this.initData();
      });
  }

  ngOnDestroy(): void {
    this._lookIfParticipantInStoreChange.unsubscribe();
  }
}

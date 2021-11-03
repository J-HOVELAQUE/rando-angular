import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-distance-by-time',
  templateUrl: './distance-by-time.component.html',
  styleUrls: ['./distance-by-time.component.css'],
})
export class DistanceByTimeComponent implements OnInit {
  constructor(public store: StoreService) {}

  private _lookIfParticipantInStoreChange: Subscription;

  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];

  initData() {
    this.lineChartLabels = this.store.participantData.data.map((dataMonth) => {
      return `${dataMonth._id.month}/${dataMonth._id.year}`;
    });

    this.lineChartData = [
      {
        data: this.store.participantData.data.map(
          (dataMonth) => dataMonth.total_dist
        ),
        label: `Distance parcourue par ${this.store.participantData.participantFirstname} ${this.store.participantData.participantName} par mois en mètres`,
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

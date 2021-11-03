import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
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

  lookIfParticipantInStoreChange: Subscription;

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
          (dataMonth) => dataMonth.total_elev
        ),
        label: `Dénivelé de ${this.store.participantData.participantFirstname} ${this.store.participantData.participantName} par mois en mêtre`,
      },
    ];
  }

  ngOnInit(): void {
    this.initData();
    this.lookIfParticipantInStoreChange =
      this.store.participantAsChanged.subscribe(() => {
        console.log('Participant change!!!!!!');
        this.initData();
      });
  }

  ngOnDestroy(): void {}
}

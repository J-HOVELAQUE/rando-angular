import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css'],
})
export class TotalsComponent implements OnInit {
  constructor(public store: StoreService) {}

  ngOnInit(): void {}
}

import { Component, OnInit, Input } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hike-popover',
  templateUrl: './hike-popover.component.html',
  styleUrls: ['./hike-popover.component.css'],
})
export class HikePopoverComponent implements OnInit {
  @Input() placeId: string;
  name = 'World';
  faEye = faEye;

  constructor() {}

  onLoadHike() {
    console.log('LOAD', this.placeId);
  }

  ngOnInit(): void {
    console.log('INIT');
  }
}

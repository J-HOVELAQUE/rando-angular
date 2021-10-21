import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { HikeRepoService } from 'src/app/services/hike-repo.service';

import { Scavenger } from '@wishtack/rx-scavenger';

@Component({
  selector: 'app-hike-popover',
  templateUrl: './hike-popover.component.html',
  styleUrls: ['./hike-popover.component.css'],
})
export class HikePopoverComponent implements OnInit, OnDestroy {
  @Input() placeId: string;
  name = 'World';
  faEye = faEye;
  private _scavenger = new Scavenger(this);

  constructor(private _hikeRepo: HikeRepoService) {}

  onLoadHike() {
    const request = this._hikeRepo.getHikeByPlace(this.placeId);
    request.pipe(this._scavenger.collectByKey('load-hike')).subscribe(
      (response) => {
        console.log('LOADED', response);
      },
      (error) => {
        console.error('LOADING FAILED', error);
      }
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}

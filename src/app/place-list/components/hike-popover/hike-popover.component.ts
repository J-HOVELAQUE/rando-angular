import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  EventEmitter,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { HikeRepoService } from 'src/app/services/hike-repo.service';
import { IRecordedHike } from 'src/app/models/hike';
import { StoreService } from 'src/app/services/store.service';

import { Scavenger } from '@wishtack/rx-scavenger';

@Component({
  selector: 'app-hike-popover',
  templateUrl: './hike-popover.component.html',
  styleUrls: ['./hike-popover.component.css'],
})
export class HikePopoverComponent implements OnInit, OnDestroy {
  @Input() placeId: string;

  @Output() createNewHike = new EventEmitter();

  faEye = faEye;
  hikes: IRecordedHike[];

  private _scavenger = new Scavenger(this);

  constructor(
    private _hikeRepo: HikeRepoService,
    private _store: StoreService,
    private _router: Router
  ) {}

  onLoadHikesForThisPlace() {
    const request = this._hikeRepo.getHikeByPlace(this.placeId);
    request.pipe(this._scavenger.collectByKey('load-hike')).subscribe(
      (response) => {
        this.hikes = response.hikes;
      },
      (error) => {
        console.error('LOADING FAILED', error);
      }
    );
  }

  onLoadHike(hike: IRecordedHike) {
    this._store.activeHike = hike;
    this._router.navigate(['/hike']);
  }

  onCreateNewHike() {
    this.createNewHike.emit(this.placeId);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}

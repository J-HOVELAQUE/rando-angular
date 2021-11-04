import { Component, OnInit, OnDestroy } from '@angular/core';
import { HikeRepoService } from 'src/app/services/hike-repo.service';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { IRecordedHike } from 'src/app/models/hike';

import { Scavenger } from '@wishtack/rx-scavenger';

@Component({
  selector: 'app-hiking-list',
  templateUrl: './hiking-list.component.html',
  styleUrls: ['./hiking-list.component.css'],
})
export class HikingListComponent implements OnInit, OnDestroy {
  hikes: IRecordedHike[];
  private _scavenger = new Scavenger(this);
  private _changeParticipantListener: Subscription;

  constructor(
    public store: StoreService,
    private _hikeRepo: HikeRepoService,
    private _router: Router
  ) {}

  onLoadHikeList() {
    if (this.store.participantData.participantId) {
      this._hikeRepo
        .getHikeByUser(this.store.participantData.participantId)
        .pipe(this._scavenger.collectByKey('get-hike-by-user'))
        .subscribe(
          (response) => {
            this.hikes = response.hikes;
          },
          (error) => console.log(error)
        );
    }
  }

  onLoadHike(hike: IRecordedHike) {
    this.store.activeHike = hike;
    this._router.navigate(['/hike']);
  }

  ngOnInit(): void {
    this._changeParticipantListener = this.store.participantAsChanged.subscribe(
      () => {
        this.onLoadHikeList();
      }
    );
  }

  ngOnDestroy(): void {
    this._changeParticipantListener.unsubscribe();
  }
}

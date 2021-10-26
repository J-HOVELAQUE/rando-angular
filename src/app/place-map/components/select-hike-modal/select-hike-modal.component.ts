import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Scavenger } from '@wishtack/rx-scavenger';

import { IRecordedPlace } from 'src/app/models/place';
import { HikeRepoService } from 'src/app/services/hike-repo.service';
import { IRecordedHike } from 'src/app/models/hike';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-select-hike-modal',
  templateUrl: './select-hike-modal.component.html',
  styleUrls: ['./select-hike-modal.component.css'],
})
export class SelectHikeModalComponent implements OnInit, OnChanges, OnDestroy {
  @Input() openFromParent: Observable<void>;
  @Input() place: IRecordedPlace;

  isOpen = false;
  hikes: IRecordedHike[];

  private _openFromParentSubscription: Subscription;
  private _scavenger = new Scavenger(this);

  constructor(
    private _hikeRepo: HikeRepoService,
    private _store: StoreService,
    private _router: Router
  ) {}

  onCloseModal() {
    this.isOpen = false;
  }

  onLoadHike(hike: IRecordedHike) {
    this._store.activeHike = hike;
    this._router.navigateByUrl('/hike');
  }

  ngOnInit(): void {
    this._openFromParentSubscription = this.openFromParent.subscribe(() => {
      this.isOpen = true;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.place && this.place) {
      const request = this._hikeRepo.getHikeByPlace(this.place._id);
      request.pipe(this._scavenger.collectByKey('get-hikes')).subscribe(
        (response) => {
          this.hikes = response.hikes;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  ngOnDestroy(): void {
    this._openFromParentSubscription.unsubscribe();
  }
}

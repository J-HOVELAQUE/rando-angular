import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css'],
})
export class ParticipantsComponent implements OnInit {
  openCreateParticipantModal = new Subject<void>();
  refreshParticipantList = new Subject<void>();

  constructor() {}

  onCreateNewParticipant() {
    this.openCreateParticipantModal.next();
  }

  onRefreshParticipantList() {
    this.refreshParticipantList.next();
    console.log('REFRESH!!!!!');
  }

  ngOnInit(): void {}
}

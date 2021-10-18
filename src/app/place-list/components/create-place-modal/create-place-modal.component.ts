import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-place-modal',
  templateUrl: './create-place-modal.component.html',
  styleUrls: ['./create-place-modal.component.css'],
})
export class CreatePlaceModalComponent implements OnInit {
  @Input() isDisplay = false;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  faTrash,
  faPen,
  faImage,
  faLocationArrow,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css'],
})
export class PlaceCardComponent implements OnInit {
  faPen = faPen;
  faTrash = faTrash;
  faImage = faImage;
  faLocationArrow = faLocationArrow;
  faEye = faEye;

  constructor() {}

  ngOnInit(): void {}
}

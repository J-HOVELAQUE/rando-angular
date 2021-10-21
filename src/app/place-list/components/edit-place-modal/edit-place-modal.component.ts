import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-place-modal',
  templateUrl: './edit-place-modal.component.html',
  styleUrls: ['./edit-place-modal.component.css'],
})
export class EditPlaceModalComponent implements OnInit {
  showModal = false;

  constructor(private _formBuilder: FormBuilder) {}

  editPlaceForm = this._formBuilder.group({
    name: [''],
    altitudeInMeters: [''],
    mountainLocation: [''],
  });

  onCloseModal() {
    this.showModal = false;
  }

  onEditPlace() {
    console.log(this.editPlaceForm.value);
  }

  ngOnInit(): void {}
}

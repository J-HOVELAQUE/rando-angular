import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlaceModalComponent } from './edit-place-modal.component';

describe('EditPlaceModalComponent', () => {
  let component: EditPlaceModalComponent;
  let fixture: ComponentFixture<EditPlaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPlaceModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

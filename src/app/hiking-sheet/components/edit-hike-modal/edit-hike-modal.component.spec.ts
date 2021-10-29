import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHikeModalComponent } from './edit-hike-modal.component';

describe('EditHikeModalComponent', () => {
  let component: EditHikeModalComponent;
  let fixture: ComponentFixture<EditHikeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHikeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHikeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

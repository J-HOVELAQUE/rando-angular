import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHikeModalComponent } from './create-hike-modal.component';

describe('CreateHikeModalComponent', () => {
  let component: CreateHikeModalComponent;
  let fixture: ComponentFixture<CreateHikeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHikeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHikeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParticipantModalComponent } from './create-participant-modal.component';

describe('CreateParticipantModalComponent', () => {
  let component: CreateParticipantModalComponent;
  let fixture: ComponentFixture<CreateParticipantModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateParticipantModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateParticipantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

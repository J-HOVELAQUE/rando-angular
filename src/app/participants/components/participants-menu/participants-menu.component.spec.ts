import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsMenuComponent } from './participants-menu.component';

describe('ParticipantsMenuComponent', () => {
  let component: ParticipantsMenuComponent;
  let fixture: ComponentFixture<ParticipantsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

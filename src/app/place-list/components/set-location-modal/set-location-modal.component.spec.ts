import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLocationModalComponent } from './set-location-modal.component';

describe('SetLocationModalComponent', () => {
  let component: SetLocationModalComponent;
  let fixture: ComponentFixture<SetLocationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetLocationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetLocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

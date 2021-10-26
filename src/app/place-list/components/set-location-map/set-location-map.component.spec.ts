import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLocationMapComponent } from './set-location-map.component';

describe('SetLocationMapComponent', () => {
  let component: SetLocationMapComponent;
  let fixture: ComponentFixture<SetLocationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetLocationMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetLocationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevationByTimeComponent } from './elevation-by-time.component';

describe('ElevationByTimeComponent', () => {
  let component: ElevationByTimeComponent;
  let fixture: ComponentFixture<ElevationByTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElevationByTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevationByTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

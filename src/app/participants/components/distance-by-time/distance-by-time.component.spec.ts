import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceByTimeComponent } from './distance-by-time.component';

describe('DistanceByTimeComponent', () => {
  let component: DistanceByTimeComponent;
  let fixture: ComponentFixture<DistanceByTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistanceByTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceByTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

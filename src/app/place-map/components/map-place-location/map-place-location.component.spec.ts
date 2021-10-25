import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPlaceLocationComponent } from './map-place-location.component';

describe('MapPlaceLocationComponent', () => {
  let component: MapPlaceLocationComponent;
  let fixture: ComponentFixture<MapPlaceLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapPlaceLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPlaceLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

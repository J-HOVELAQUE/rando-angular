import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikingListComponent } from './hiking-list.component';

describe('HikingListComponent', () => {
  let component: HikingListComponent;
  let fixture: ComponentFixture<HikingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HikingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HikingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

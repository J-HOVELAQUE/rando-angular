import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikingSheetComponent } from './hiking-sheet.component';

describe('HikingSheetComponent', () => {
  let component: HikingSheetComponent;
  let fixture: ComponentFixture<HikingSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HikingSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HikingSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

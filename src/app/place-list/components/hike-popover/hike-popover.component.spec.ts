import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikePopoverComponent } from './hike-popover.component';

describe('HikePopoverComponent', () => {
  let component: HikePopoverComponent;
  let fixture: ComponentFixture<HikePopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HikePopoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HikePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHikeModalComponent } from './select-hike-modal.component';

describe('SelectHikeModalComponent', () => {
  let component: SelectHikeModalComponent;
  let fixture: ComponentFixture<SelectHikeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectHikeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectHikeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

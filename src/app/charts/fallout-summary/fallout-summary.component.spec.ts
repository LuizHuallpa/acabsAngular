import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalloutSummaryComponent } from './fallout-summary.component';

describe('FalloutSummaryComponent', () => {
  let component: FalloutSummaryComponent;
  let fixture: ComponentFixture<FalloutSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalloutSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalloutSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

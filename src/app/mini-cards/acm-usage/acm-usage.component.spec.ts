import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmUsageComponent } from './acm-usage.component';

describe('AcmUsageComponent', () => {
  let component: AcmUsageComponent;
  let fixture: ComponentFixture<AcmUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcmUsageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcmUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdgUsageComponent } from './cdg-usage.component';

describe('CdgUsageComponent', () => {
  let component: CdgUsageComponent;
  let fixture: ComponentFixture<CdgUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdgUsageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdgUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

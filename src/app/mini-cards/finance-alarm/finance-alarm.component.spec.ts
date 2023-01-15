import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceAlarmComponent } from './finance-alarm.component';

describe('FinanceAlarmComponent', () => {
  let component: FinanceAlarmComponent;
  let fixture: ComponentFixture<FinanceAlarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceAlarmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

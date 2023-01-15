import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecAlarmsComponent } from './lec-alarms.component';

describe('LecAlarmsComponent', () => {
  let component: LecAlarmsComponent;
  let fixture: ComponentFixture<LecAlarmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecAlarmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecAlarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

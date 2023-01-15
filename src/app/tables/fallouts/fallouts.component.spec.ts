import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalloutsComponent } from './fallouts.component';

describe('FalloutsComponent', () => {
  let component: FalloutsComponent;
  let fixture: ComponentFixture<FalloutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalloutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalloutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

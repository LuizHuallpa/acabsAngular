import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgOrderComponent } from './cg-order.component';

describe('CgOrderComponent', () => {
  let component: CgOrderComponent;
  let fixture: ComponentFixture<CgOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CgOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

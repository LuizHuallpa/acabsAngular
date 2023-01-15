import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockfeedsComponent } from './mockfeeds.component';

describe('MockfeedsComponent', () => {
  let component: MockfeedsComponent;
  let fixture: ComponentFixture<MockfeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockfeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockfeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

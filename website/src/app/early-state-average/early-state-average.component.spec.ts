import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyStateAverageComponent } from './early-state-average.component';

describe('ExampleComponent', () => {
  let component: EarlyStateAverageComponent;
  let fixture: ComponentFixture<EarlyStateAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarlyStateAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlyStateAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterCompositionComponent } from './voter-composition.component';

describe('VoterCompositionComponent', () => {
  let component: VoterCompositionComponent;
  let fixture: ComponentFixture<VoterCompositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterCompositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

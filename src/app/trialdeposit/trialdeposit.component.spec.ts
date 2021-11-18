import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialdepositComponent } from './trialdeposit.component';

describe('TrialdepositComponent', () => {
  let component: TrialdepositComponent;
  let fixture: ComponentFixture<TrialdepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialdepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialdepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

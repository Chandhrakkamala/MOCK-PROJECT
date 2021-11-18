import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalpopComponent } from './modalpop.component';

describe('ModalpopComponent', () => {
  let component: ModalpopComponent;
  let fixture: ComponentFixture<ModalpopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalpopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogingeneralComponent } from './logingeneral.component';

describe('LogingeneralComponent', () => {
  let component: LogingeneralComponent;
  let fixture: ComponentFixture<LogingeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogingeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogingeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

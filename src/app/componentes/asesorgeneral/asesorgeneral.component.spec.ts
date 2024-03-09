import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorgeneralComponent } from './asesorgeneral.component';

describe('AsesorgeneralComponent', () => {
  let component: AsesorgeneralComponent;
  let fixture: ComponentFixture<AsesorgeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesorgeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

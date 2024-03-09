import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginestudianteComponent } from './loginestudiante.component';

describe('LoginestudianteComponent', () => {
  let component: LoginestudianteComponent;
  let fixture: ComponentFixture<LoginestudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginestudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

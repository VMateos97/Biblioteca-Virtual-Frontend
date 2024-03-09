import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaResidenciaComponent } from './vista-residencia.component';

describe('VistaResidenciaComponent', () => {
  let component: VistaResidenciaComponent;
  let fixture: ComponentFixture<VistaResidenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaResidenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaResidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

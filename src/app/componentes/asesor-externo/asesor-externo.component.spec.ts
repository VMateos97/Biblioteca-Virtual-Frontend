import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorExternoComponent } from './asesor-externo.component';

describe('AsesorExternoComponent', () => {
  let component: AsesorExternoComponent;
  let fixture: ComponentFixture<AsesorExternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesorExternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

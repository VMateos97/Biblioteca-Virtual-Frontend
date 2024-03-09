import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorInternoComponent } from './asesor-interno.component';

describe('AsesorInternoComponent', () => {
  let component: AsesorInternoComponent;
  let fixture: ComponentFixture<AsesorInternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesorInternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

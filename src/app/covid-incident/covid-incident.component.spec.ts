import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidIncidentComponent } from './covid-incident.component';

describe('CovidIncidentComponent', () => {
  let component: CovidIncidentComponent;
  let fixture: ComponentFixture<CovidIncidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidIncidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

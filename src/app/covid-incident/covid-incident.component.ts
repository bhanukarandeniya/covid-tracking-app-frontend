import { Component, OnInit } from '@angular/core';
import { DatepickerComponent } from '../datepicker/datepicker.component';

@Component({
  selector: 'app-covid-incident',
  templateUrl: './covid-incident.component.html',
  styleUrls: ['./covid-incident.component.css']
})
export class CovidIncidentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  picker;

}

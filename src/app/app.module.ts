import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidIncidentComponent } from './covid-incident/covid-incident.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeterialModule } from './meterial/meterial.module';

@NgModule({
  declarations: [
    AppComponent,
    CovidIncidentComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MeterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

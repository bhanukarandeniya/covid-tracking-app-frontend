import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MaterialComponents = [MatDatepickerModule, MatFormFieldModule, MatInputModule];

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [MaterialComponents]
})
export class MeterialModule { }

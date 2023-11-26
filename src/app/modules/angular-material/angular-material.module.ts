import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';

const materialComponent = [
  MatButtonModule,
  MatChipsModule,
  MatTableModule
]
@NgModule({
  imports: [materialComponent],
  exports:[materialComponent]
})
export class AngularMaterialModule { }

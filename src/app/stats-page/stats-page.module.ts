import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from "../stats-page/stats/stats.component"
import { SharedModule } from '../shared/shared.module';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComplexTableComponent } from './complex-table/complex-table.component';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [
    StatsComponent,
    SimpleTableComponent,
    ComplexTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    MatRadioModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxSpinnerModule

  ],providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
}]
})
export class StatsPageModule { }

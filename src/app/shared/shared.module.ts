import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterDatePipe } from './pipes/filter-date.pipe';

@NgModule({
  declarations: [FilterDatePipe],
  imports: [
    CommonModule
  ],
  exports: [FilterDatePipe]
})
export class SharedModule { }

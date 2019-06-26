import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterDatePipe } from './pipes/filter-date.pipe';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [FilterDatePipe, NotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [FilterDatePipe]
})
export class SharedModule { }

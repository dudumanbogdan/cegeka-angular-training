import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterDate'
})
export class FilterDatePipe implements PipeTransform {

  transform(values: any[], args?: any): any {
    if (!values || !args) {
      return values;
    }

    return values.filter(item => item.birthday.getMonth() >= args.birthday.getMonth());
  }
}

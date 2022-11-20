import { Pipe, PipeTransform } from '@angular/core';
import { ISelectListItem } from '@interfaces/select-list';

@Pipe({
  name: 'selectValue',
})
export class SelectValuePipe implements PipeTransform {
  transform(key: unknown, source: readonly ISelectListItem<unknown>[]): any {
    if (key == null || !source) {
      return '';
    }
    return source.find((item) => item.key === key)?.label || '';
  }
}

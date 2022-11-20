import { Pipe, PipeTransform } from '@angular/core';
import { ISelectListItem } from '@interfaces/select-list';

@Pipe({
  name: 'selectKeys',
})
export class SelectKeysPipe implements PipeTransform {
  transform(selectValue: readonly ISelectListItem<unknown>[]): unknown[] {
    if (!selectValue) {
      return [];
    }
    return selectValue.map((item) => item.key);
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { ILocation } from '@interfaces/location';

@Pipe({
  name: 'location',
})
export class LocationPipe implements PipeTransform {
  transform(value: ILocation, ...args: unknown[]): string {
    let out = value.country;
    if (value.region) {
      out += `, ${value.region}`;
    }
    out += `, ${value.city}`;
    if (value.area) {
      out += `, ${value.area}`;
    }
    return out;
  }
}

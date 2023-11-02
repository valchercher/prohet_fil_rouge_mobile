import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'absence'
})
export class AbsencePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

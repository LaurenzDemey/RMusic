import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readableNumber'
})
export class ReadableNumberPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) {
      return '0';
    }
    const iValue = parseInt(value, 10);
    if (iValue <= 999) {
      return iValue.toString();
    }
    if (iValue < 1000000) {
      return this.round(iValue / 1000, 1) + 'K';
    } else {
      return this.round(iValue / 1000000, 1) + 'M';
    }
  }

  private round(value, decimals) {
    const a: any = value + 'e' + decimals;
    return Number(Math.round(a) + 'e-' + decimals);
  }
}

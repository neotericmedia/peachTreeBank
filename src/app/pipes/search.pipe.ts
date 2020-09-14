import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal =
        val.merchant.toLocaleLowerCase().includes(args) ||
        val.transactionType.toString().includes(args) ||
        val.amount.toLocaleLowerCase().includes(args);
      return rVal;
    });
  }
}

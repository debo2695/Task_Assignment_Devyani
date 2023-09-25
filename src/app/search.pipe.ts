import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], args: any): any[] {
    if(args == 100) {
      value =  value.filter(v => (v.price == 100 || v.price == '100' ))
    }

    if(args == 500) {
      value =  value.filter(v => (v.price == 500 || v.price == '500' ))
    }

    if(args == 'instock') {
      value =  value.filter(v => (v.stock == 'instock' ))
    }

    if(args == 'outofstock') {
      value =  value.filter(v => (v.stock == 'outofstock' ))
    }
     return value;
  }

}

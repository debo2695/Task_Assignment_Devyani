import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbyword'
})
export class SearchbywordPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    list = list ? (list.filter(item => (item?.title)?.search(new RegExp(filterText, 'i')) > -1)) : [];
    return list; 
    }

}

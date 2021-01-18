import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterBy:any='', filter:any): any {
    console.log(value,filterBy);
    if(filter=='' || filter==null) {return value;}
    return value.filter(val => {
      return val[filterBy].toLowerCase().includes(filter)
    })

  }

}

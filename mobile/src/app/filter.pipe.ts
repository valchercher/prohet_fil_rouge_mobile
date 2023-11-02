import { Pipe, PipeTransform } from '@angular/core';
import { Sessions } from './interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Sessions[],search: string,libelle:string): Sessions[]{
    if(!search)
    {
      return value;
    }
    if(!value)
    {
      return [];
    }
    return value.filter(elmt=>{
      if(elmt && elmt.cours)
      {
        return elmt.cours.module_user.module.libelle.toLowerCase().includes(search.toLowerCase());
      }
      return false;
    })

  }

}

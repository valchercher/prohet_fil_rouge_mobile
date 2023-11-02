import { Pipe, PipeTransform } from '@angular/core';
import { Cours } from './interface';

@Pipe({
  name: 'coursFilter'
})
export class CoursFilterPipe implements PipeTransform {

  transform(value: Cours[],search:string,libelle:string): Cours[] {
    if(!value)
    {
      return []
    }
    if(!search)
    {
      return value;
    }
    return value.filter(el=>{
      if(el && el.module_user.module)
      {
        return el.module_user.module.libelle.toLowerCase().includes(search.toLowerCase());
      }
      return false
    })
  }

}

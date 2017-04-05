import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

    constructor(private el:ElementRef){
      if(el.nativeElement.style.color=="blue")
      {
        el.nativeElement.style.visibility= 'visible';
      }
      else
      {
         el.nativeElement.style.visibility= 'hidden';
      }
    }

}

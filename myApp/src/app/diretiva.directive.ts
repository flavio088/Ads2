import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[mudaCor]',
  standalone: false
})
export class DiretivaDirective {
  @HostBinding('style.color') cor = 'red';
  @HostBinding('style.backgroundColor') backCor = 'white';
  constructor() { }

}

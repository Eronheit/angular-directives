import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @Input() defaultColor: string = 'white';
  /* Exemplo 1 */
  //@Input() highlightColor: string = 'yellow';

  /* Exemplo 2 */
  @Input('highlight') highlightColor: string = 'yellow';


  constructor() { }

  ngOnInit(): void {
   this.backgroundColor = this.defaultColor;
  }
}

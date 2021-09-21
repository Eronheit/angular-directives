import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    /* Método 1 */
    //this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow')
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    /* Método 1 */
    //this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'white')
    this.backgroundColor = 'white'
  }

  /* Método 2 */
  //@HostBinding('style.backgroundColor') backgroundColor!: string;

  /* Método 3 */
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  /* Método 3 */
  private backgroundColor!: string;

  constructor(
    /* Método 1 */
    //private _elementRef: ElementRef,
    //private _renderer: Renderer2
  ) { }

}

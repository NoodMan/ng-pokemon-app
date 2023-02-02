import { Directive, ElementRef, HostListener, Input } from '@angular/core';
//ng generate directive border-card

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5c60a';
  private defaultColor: string = '#fc0a0a';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

@Input('pkmnBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

    @HostListener('mouseleave') onMouseLeave(){
      this.setBorder(this.initialColor);
    }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }
  private setBorder(color: string) {
    let border = 'solid 4px' + color;
    this.el.nativeElement.style.border = border;
  }
}

import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollClass]'
})
export class ScrollClassDirective {
  constructor(private el: ElementRef) {}

  @Input('appScrollClass')
  treshold: number;

  @HostBinding('class.scrolled')
  hasMeetScrollingTreshold: boolean;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const positioningOnScreen = this.el.nativeElement.parentNode.getBoundingClientRect();
    this.hasMeetScrollingTreshold = positioningOnScreen.top <= this.treshold;
  }
}

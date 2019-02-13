import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, merge, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, mapTo, startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit, OnDestroy {
  // showOVerlay: boolean = false;
  showOverlay$: Observable<boolean>;
  destroy$: Subject<boolean> = new Subject();

  @Input()
  tmpl: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const mouseEnter$ = fromEvent(this.el.nativeElement, 'mouseenter').pipe(mapTo(true));
    const mouseLeave$ = fromEvent(this.el.nativeElement, 'mouseleave').pipe(mapTo(false));
    this.showOverlay$ = merge(mouseEnter$, mouseLeave$).pipe(
      distinctUntilChanged(),
      startWith(false),
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  // @HostListener('mouseenter')
  // onMouseEnter() {
  //   this.showOverlay = true;
  // }

  // @HostListener('mouseleave')
  // onMouseLeave() {
  //   this.showOverlay = false;
  // }
}

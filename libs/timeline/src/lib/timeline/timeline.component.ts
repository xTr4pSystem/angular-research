import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, NgZone, ViewChild } from '@angular/core';
import { fromEvent, takeUntil } from 'rxjs';

@Component({
    selector: 'ar-timeline',
    templateUrl: './timeline.component.html',
    styleUrl: './timeline.component.scss',
    standalone: false
})
export class TimelineComponent {
  @ViewChild('timelineBarKnob')
  timelineBarKnob!: ElementRef<HTMLDivElement>;

  @ViewChild('timelineBar')
  timelineBar!: ElementRef<HTMLDivElement>;

  @ViewChild('timelineBarFill')
  timelineBarFill!: ElementRef<HTMLDivElement>;

  constructor(private ngZone: NgZone, @Inject(DOCUMENT) private document: Document) {}

  knobMouseDown(e: MouseEvent) {
    this.ngZone.runOutsideAngular(() => {
      fromEvent<MouseEvent>(this.document, 'mousemove')
        .pipe(takeUntil(fromEvent<MouseEvent>(this.document, 'mouseup')))
        .subscribe((e) => {
          const timelineBounds = this.timelineBar.nativeElement.getBoundingClientRect();

          const knobXPosition = e.clientX - timelineBounds.x;
          const delta = Math.min(Math.max(0, knobXPosition), timelineBounds.width);

          this.timelineBarKnob.nativeElement.style.transform = `translateX(${delta}px)`;
          this.timelineBarFill.nativeElement.style.width = `${(delta * 100) / timelineBounds.width}%`;
        });
    });
  }
}

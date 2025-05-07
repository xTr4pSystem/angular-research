import { OverlayContainer } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ElementRef, Inject, Injectable } from '@angular/core';

@Injectable()
export class DynamicOverlayContainerService extends OverlayContainer {
  constructor(
    @Inject(DOCUMENT) document: Document,
    @Inject(Platform) platform: Platform,
    private elementRef: ElementRef<HTMLDivElement>
  ) {
    super(document, platform);
  }

  override _createContainer(): void {
    const containerClass = 'cdk-overlay-container';

    const container = this._document.createElement('div');
    container.classList.add(containerClass);
    container.classList.add('test');

    this.elementRef.nativeElement.appendChild(container);
    this._containerElement = container;
  }
}

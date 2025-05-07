import { DEFAULT_DIALOG_CONFIG, Dialog, DIALOG_SCROLL_STRATEGY, DialogConfig } from '@angular/cdk/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { Inject, Injectable, Injector, Optional, SkipSelf } from '@angular/core';
import { DynamicOverlayContainerService } from './dynamic-overlay-container.service';

@Injectable()
export class DynamicDialog extends Dialog {
  constructor(
    overlay: Overlay,
    injector: Injector,
    @Optional() @Inject(DEFAULT_DIALOG_CONFIG) defaultOptions: DialogConfig,
    @Optional() @SkipSelf() parentDialog: Dialog,
    overlayContainer: DynamicOverlayContainerService,
    @Inject(DIALOG_SCROLL_STRATEGY) scrollStrategy: any
  ) {
    super(overlay, injector, defaultOptions, parentDialog, overlayContainer, scrollStrategy);
  }
}

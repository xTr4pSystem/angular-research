import { Component, inject } from '@angular/core';
import { DialogComponent } from '../../dialog/dialog.component';
import { DynamicDialog, DynamicOverlayContainerService } from '../../dynamic-dialog';

@Component({
    selector: 'ar-scoped-component',
    templateUrl: './scoped-component.component.html',
    styleUrl: './scoped-component.component.scss',
    providers: [DynamicDialog, DynamicOverlayContainerService],
    standalone: false
})
export class ScopedComponentComponent {
  dialog = inject(DynamicDialog);

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      height: '250px',
    });
  }
}

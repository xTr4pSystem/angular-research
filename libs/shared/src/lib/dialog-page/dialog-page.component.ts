import { Dialog } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'ar-dialog-page',
  templateUrl: './dialog-page.component.html',
  styleUrl: './dialog-page.component.scss',
})
export class DialogPageComponent {
  dialog = inject(Dialog);

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      height: '250px',
      hasBackdrop: true,
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogPageComponent } from './dialog-page/dialog-page.component';
import { DialogModule } from '@angular/cdk/dialog';
import { ScopedComponentComponent } from './dialog-page/scoped-component/scoped-component.component';

@NgModule({
  imports: [CommonModule, DialogModule],
  declarations: [ButtonComponent, DialogComponent, DialogPageComponent, ScopedComponentComponent],
  exports: [ButtonComponent, DialogComponent, DialogPageComponent, ScopedComponentComponent],
})
export class SharedModule {}

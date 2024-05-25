import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphBuilderComponent } from './graph-builder/graph-builder.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [GraphBuilderComponent],
  exports: [GraphBuilderComponent],
})
export class ComplexFromsModule {}

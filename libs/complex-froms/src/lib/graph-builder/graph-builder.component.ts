import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormRecord, Validators } from '@angular/forms';
import { GraphBuilderService } from './graph-builder.service';

@Component({
    selector: 'ar-graph-builder',
    templateUrl: './graph-builder.component.html',
    styleUrl: './graph-builder.component.scss',
    standalone: false
})
export class GraphBuilderComponent {
  categories$ = this.graphBuilderService.getCategories();

  form = this.fb.group({
    category: ['', Validators.required],
    subCategories: this.fb.record<FormRecord<FormControl<string>>>({}),
  });

  constructor(private fb: FormBuilder, private graphBuilderService: GraphBuilderService) {}
}

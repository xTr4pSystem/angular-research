import { GraphBuilderComponent } from '@angular-research/complex-froms';
import { ButtonComponent, DialogPageComponent } from '@angular-research/shared';
import { TimelineComponent } from '@angular-research/timeline';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { title: 'timeline', path: 'timeline', component: TimelineComponent },
  { title: 'graph', path: 'graph', component: GraphBuilderComponent },
  { title: 'button', path: 'button', component: ButtonComponent },
  { title: 'dialog', path: 'dialog', component: DialogPageComponent },
  { path: '**', redirectTo: 'timeline' },
];

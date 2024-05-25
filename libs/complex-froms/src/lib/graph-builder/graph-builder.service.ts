import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraphBuilderService {
  getCategories(): Observable<string[]> {
    return of(['Food', 'Videos', 'Games', 'Series']).pipe(delay(1000));
  }

  getSubCategories(): Observable<string[]> {
    return of(['Steak', 'Scrambled Egg', 'Fish', 'Toast', 'Spaghetti']).pipe(delay(1000));
  }
}

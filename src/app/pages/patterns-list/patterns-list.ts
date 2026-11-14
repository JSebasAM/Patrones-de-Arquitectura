import { Component, inject } from '@angular/core';
import { PatternCard } from '../../components/pattern-card/pattern-card';
import { PatternsService } from '../../services/patterns.service';

/**
 * Página principal del catálogo con herramientas de búsqueda, filtrado taxonómico y favoritos.
 */
@Component({
  selector: 'app-patterns-list',
  imports: [PatternCard],
  templateUrl: './patterns-list.html',
  styleUrl: './patterns-list.scss',
})
export class PatternsList {
  protected readonly service = inject(PatternsService);

  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.service.setSearchQuery(input.value);
  }

  clearSearch(input: HTMLInputElement): void {
    input.value = '';
    this.service.setSearchQuery('');
  }
}

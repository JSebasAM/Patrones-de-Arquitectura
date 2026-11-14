import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pattern } from '../../models/pattern.model';
import { PatternsService } from '../../services/patterns.service';

/**
 * Tarjeta interactiva que presenta un patrón en la lista del catálogo.
 */
@Component({
  selector: 'app-pattern-card',
  imports: [RouterLink],
  templateUrl: './pattern-card.html',
  styleUrl: './pattern-card.scss',
})
export class PatternCard {
  protected readonly service = inject(PatternsService);

  /** Patrón a desplegar. */
  readonly pattern = input.required<Pattern>();

  /** Alterna la condición de favorito para este patrón. */
  toggleFavorite(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.service.toggleFavorite(this.pattern().id);
  }
}

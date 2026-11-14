import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PatternsService } from '../../services/patterns.service';

/**
 * Vista de detalle exhaustiva para un patrón arquitectónico seleccionado.
 */
@Component({
  selector: 'app-pattern-detail',
  imports: [RouterLink],
  templateUrl: './pattern-detail.html',
  styleUrl: './pattern-detail.scss',
})
export class PatternDetail {
  protected readonly service = inject(PatternsService);

  /** Identificador del patrón recibido desde el parámetro de ruta :id. */
  readonly id = input.required<string>();

  /** Patrón consultado reactivamente. */
  readonly pattern = computed(() => this.service.getPatternById(this.id()));

  /** Alterna la marca de favorito del patrón actual. */
  toggleFavorite(): void {
    const p = this.pattern();
    if (p) {
      this.service.toggleFavorite(p.id);
    }
  }
}

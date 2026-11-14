import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PatternsService } from '../../services/patterns.service';

/**
 * Barra de navegación superior con accesos rápidos y controles globales.
 */
@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly service = inject(PatternsService);
}

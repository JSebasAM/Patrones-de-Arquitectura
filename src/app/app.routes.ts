import { Routes } from '@angular/router';
import { PatternDetail } from './pages/pattern-detail/pattern-detail';
import { PatternsList } from './pages/patterns-list/patterns-list';

export const routes: Routes = [
  {
    path: '',
    component: PatternsList,
    title: 'Explorador de Patrones de Arquitectura | Catálogo',
  },
  {
    path: 'patron/:id',
    component: PatternDetail,
    title: 'Detalle del Patrón | Patrones de Arquitectura',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

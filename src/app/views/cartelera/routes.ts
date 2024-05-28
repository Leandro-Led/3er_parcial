import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
    data: {
      title: 'Base'
    },
    children: [
        {
            path: '',
            redirectTo: 'cards',
            pathMatch: 'full'
        },
        {
            path: 'pelicula',
            loadComponent: () => import('./pelicula/pelicula.component').then(m => m.PeliculaComponent),
            data: {
            title: 'Pelicula'
            }
        },
        {
            path: 'reportes',
            loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
            data: {
            title: 'Reportes'
            }
        },
        ]
        
    }
]
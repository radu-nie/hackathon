import { Routes } from '@angular/router';
import { IndicesComponent } from './components/indices/indices.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, {
        path: 'indices',
        component: IndicesComponent,
        redirectTo: '/indices',
        pathMatch: 'full'
    }, {
        path: '**',
        redirectTo: 'session/404'
    }
]
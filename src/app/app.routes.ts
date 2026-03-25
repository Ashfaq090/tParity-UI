import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('./auth/auth.route')
                .then(m => m.AUTH_ROUTES)
    },
    {
        path: 'features',
        loadChildren: () => 
            import('./features/features.route')
                .then(f => f.FEATURES_ROUTE)
    }
];

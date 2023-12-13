import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { authGuard } from './guards/auth.guard';
import { SignInComponent } from './features/auth/pages/sign-in/sign-in.component';

export const routes: Routes = [
    { path: 'sign-in',  pathMatch: 'full', component: SignInComponent },
    // { path: '', redirectTo: '/auth', pathMatch: 'full' },
    // { path: 'auth', pathMatch: 'full', loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES) },
    // { path: 'home', pathMatch: 'full', loadChildren: () => import('./shared/components/layout/layout.routes').then(m => m.LAYOUT_ROUTES), canLoad: [authGuard] },

    { path: '**', component: PageNotFoundComponent }
];

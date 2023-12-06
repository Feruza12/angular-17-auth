import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignInComponent } from './features/auth/pages/sign-in/sign-in.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    // {path: 'sign-up', component: SignUpComponent},
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'auth', loadChildren: () => import('./features/auth/components/auth-wrapper/auth.routes').then(m => m.AUTH_ROUTES) },
    { path: 'home', pathMatch: 'full', loadChildren: () => import('./shared/components/layout/layout.routes').then(m => m.LAYOUT_ROUTES), canLoad: [authGuard] },

    { path: '**', component: PageNotFoundComponent }
];

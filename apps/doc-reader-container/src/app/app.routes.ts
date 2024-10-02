import {Route} from '@angular/router';
import {loadRemoteModule} from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'doc-reader-app',
    loadChildren: () =>
      loadRemoteModule('doc-reader-app', './Routes').then(
        (m) => m.remoteRoutes
      ),
  },
  {
    path: '',
    loadComponent: () => import('./components/login/login.component').then((m) => m.LoginComponent),
  },
];

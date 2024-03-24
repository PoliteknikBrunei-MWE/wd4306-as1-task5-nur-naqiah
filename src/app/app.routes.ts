import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then( m => m.AuthPage)
  },
  {
    path: 'offers',
    loadComponent: () => import('./offers/offers.page').then( m => m.OffersPage)
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'places',
        loadComponent: () =>
          import('./places/places.page').then((m) => m.PlacesPage),
      },
      {
        path: 'offers',
        loadComponent: () =>
          import('./offers/offers.page').then((m) => m.OffersPage),
      },
    ],
  },
  {
    path: 'places',
    redirectTo: '/tabs/places',
    pathMatch: 'full',
  },
  {
  path: 'places/:placesId',
  loadComponent: () => import('./places/place-detail/place-detail.page').then( m => m.PlaceDetailPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
  },
];


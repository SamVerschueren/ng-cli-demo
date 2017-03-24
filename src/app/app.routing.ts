import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: 'app/home/home.module#HomeModule', pathMatch: 'full' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' }
];

export const routing = RouterModule.forRoot(routes);

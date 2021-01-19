import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './component/shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./component/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },

      {
        path: 'members',
        loadChildren: () =>
          import('./component/members/all-members/all-members.module').then((m) => m.AllMembersModule),
      },
      {
        path: 'contacts',
        loadChildren: () => import('./component/contacts/contacts.module').then((m) => m.ContactsModule),
      },
      {
        path: 'aboutus',
        loadChildren: () => import('./component/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'authentication',
        loadChildren: () =>
          import('./component/authentication/authentication.module').then((m) => m.AuthenticationModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

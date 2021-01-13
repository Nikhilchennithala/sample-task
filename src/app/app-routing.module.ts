import { AbsoluteSourceSpan } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MembersComponent } from './component/members/members.component';
import { LayoutComponent } from './component/shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'aboutus',
        component: AboutComponent,
      },
      {
        path: 'members',
        component: MembersComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

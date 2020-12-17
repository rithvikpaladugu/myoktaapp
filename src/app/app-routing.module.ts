import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {
  OKTA_CONFIG,
  OktaAuthGuard,
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login/callback',
    component: OktaCallbackComponent,
  },
  {
    path:'contact',
    component: ContactUsComponent,
    canActivate:[OktaAuthGuard]
  },
  {
    path:'blog',
    component: BlogComponent,
    canActivate:[OktaAuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [OktaAuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { QuetionsComponent } from './quetions/quetions.component';


// const routes: Routes = [];

const routes: Routes = [
  // { path: 'user', component: UserComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'booking',component: BookingComponent},
  // { path: 'animation',component: AnimationPageComponent},
  { path: 'quetions',component: QuetionsComponent},
  { path: 'welcome',component: WelcomePageComponent},
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
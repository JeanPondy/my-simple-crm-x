import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { SettingsComponent } from './settings/settings.component';
import { UserDetailComponent } from './user-detail/user-detail.component';



export const routes: Routes = [
   // { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Startseite auf /dashboard weiterleiten
    { path: '', component: DashboardComponent }, // Startseite
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    {path: 'settings', component: SettingsComponent},
    {path: 'user/:id', component: UserDetailComponent},
  
];


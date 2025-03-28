import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NotificationComponent } from './components/notification/notification.component';

export const routes: Routes = [
    { path: 'notification', component: NotificationComponent},
    { path: '', component: DashboardComponent},
];

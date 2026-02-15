import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'student',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/private/student/student-layout/student-layout.component')
        .then(m => m.StudentLayoutComponent),

    children: [
      {
        path: 'dashboard',
        loadComponent: () =>

          import('./pages/private/student/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)

      },
      {
        path: 'schedule',
        loadComponent: () =>
          import('./pages/private/student/schedule/schedule.component')
            .then(m => m.ScheduleComponent)
      },
      {
        path: 'settings',
        loadComponent: () =>

          import('./pages/private/student/settings/settings.component')
            .then(m => m.SettingsComponent)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }

];

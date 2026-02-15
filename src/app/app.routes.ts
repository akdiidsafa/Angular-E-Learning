import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [

  {
    path: 'student',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./student/student-layout.component')
        .then(m => m.StudentLayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./student/dashboard.component')
            .then(m => m.DashboardComponent),
      },
      {
        path: 'schedule',
        loadComponent: () =>
          import('./student/schedule.component')
            .then(m => m.ScheduleComponent),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./student/settings.component')
            .then(m => m.SettingsComponent),
      }
    ]
  }

];

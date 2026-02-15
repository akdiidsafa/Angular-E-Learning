import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';



export const routes: Routes = [
   
   {
     path: 'student',
     canActivate: [authGuard],
     loadComponent: () =>
      import('./pages/private/student/student-layout/student-layout.component')
         .then(m => m.StudentLayoutComponent)},


  {
    path: '',
    loadComponent: () =>
      import('./pages/public/home/home.component')
        .then(m => m.HomeComponent)
  },

  {
    path: 'courses',
    loadComponent: () =>
      import('./pages/public/catalog/catalog.component')
        .then(m => m.CatalogComponent)
  },

  {
    path: 'courses/:id',
    loadComponent: () =>
      import('./pages/public/course-detail/course-detail.component')
        .then(m => m.CourseDetailComponent)
  },

  {
    path: '',
    loadComponent: () =>
      import('./pages/public/home/home.component').then(m => m.HomeComponent)
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/public/login/login.component')
        .then(m => m.LoginComponent)
  },
  {
    path: '',
    loadComponent: () => import('./pages/public/home/home.component')
      .then(m => m.HomeComponent)
  },
  {
    path: 'courses',
    loadComponent: () => import('./pages/public/catalog/catalog.component')
      .then(m => m.CatalogComponent)
  },
  {
    path: 'courses/:id',
    loadComponent: () => import('./pages/public/course-detail/course-detail.component')
      .then(m => m.CourseDetailComponent)
  },
  {
  path: 'login',
  loadComponent: () => import('./pages/public/login/login.component')
    .then(m => m.LoginComponent)
},
  {
    path: 'student',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/private/student/student-layout/student-layout.component')
        .then(m => m.StudentLayoutComponent),
    children: [
       {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
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
     
    ]
  },
  
   {
         path: '',
         loadComponent: () =>
         import('./pages/public/home/home.component').then(m => m.HomeComponent)
     }
    ];
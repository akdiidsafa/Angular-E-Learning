import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppRootComponent } from './app/app-root.component';


bootstrapApplication(AppRootComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch((err) => console.error(err));

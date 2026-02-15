import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template:`
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
   * {
  margin: 0;
  padding: 0;
  box-sizing: border-box
  ;
  scrollbar-width: none;
   
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   overflow-x: hidden;
   ::-webkit-scrollbar {
      display: none;
    }
}
  `]


})
export class AppRootComponent {
  title = 'E-Learning Academy';
}
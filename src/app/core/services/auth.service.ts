import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private isLoggedInSignal = signal(false);

  isLoggedIn() {
    return this.isLoggedInSignal();
  }

  login() {
    this.isLoggedInSignal.set(true);
  }

  logout() {
    this.isLoggedInSignal.set(false);
  }
}

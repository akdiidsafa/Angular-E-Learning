import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogComponent } from './pages/public/catalog/catalog.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_E-learning');
}

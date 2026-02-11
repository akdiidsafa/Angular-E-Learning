import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true, 
  imports: [CommonModule,RouterModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  cours = signal([
    { id: 1, title: 'Angular',description:"angular-masterclass" },
    { id: 2, title: 'React',description:"react-masterclass" },
    { id: 3, title: 'Vue ',description:"vue-masterclass" },
  ]) 
}

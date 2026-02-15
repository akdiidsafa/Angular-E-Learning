import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule,RouterLink  } from '@angular/router';

@Component({
  selector: 'app-home.component',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {}

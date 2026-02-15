import { Component } from '@angular/core';
import { RouterModule, RouterLink} from '@angular/router';

@Component({
  selector: 'app-not-found.component',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})


export class NotFoundComponent {}

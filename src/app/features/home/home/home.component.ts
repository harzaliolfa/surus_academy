import { Component } from '@angular/core';
import { CoursesListComponent } from "../../courses/courses-home/courses-list/courses-list.component";
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CoursesListComponent, 
    RouterOutlet,RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

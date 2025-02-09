import { Component } from '@angular/core';
import { CoursesListComponent } from "../../courses/courses-home/courses-list/courses-list.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,RouterModule,CommonModule 
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tutors = [
    {
      name: "Theresa Webb",
      role: "Planning Lead",
      bio: "Former co-founder of Planning"
    },
    {
      name: "Theresa Webb",
      role: "Planning Lead",
      bio: "Former co-founder of Planning"
    },
    {
      name: "Theresa Webb",
      role: "Planning Lead",
      bio: "Former co-founder of Planning"
    },
    {
      name: "Theresa Webb",
      role: "Planning Lead",
      bio: "Former co-founder of Planning"
    }
  ];

}

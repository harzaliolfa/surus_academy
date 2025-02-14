import { Component } from '@angular/core';
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

  ngOnInit(): void {

   if (typeof window !== 'undefined') {
       window.scrollTo(0, 0);}
  }

  tutors = [
    {
      name: "Dhafer Jaballah",
      role: "Planning Lead",
      bio: "Planning, project Control",
      img:"assets/dhafer.jfif",
      linkdinUrl:"https://www.linkedin.com/in/surus/",
      xUrl:"https://www.linkedin.com/in/surus/" ,
    }
  ];

}

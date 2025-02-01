import { Component } from '@angular/core';
import { CoursesListComponent } from "./courses-list/courses-list.component";
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-courses-home',
  imports: [CoursesListComponent , NgbCarouselModule],
  templateUrl: './courses-home.component.html',
  styleUrl: './courses-home.component.css'
})
export class CoursesHomeComponent {
  images = ["assets/Courses-banner1.PNG", "assets/Courses-banner2.jpg", "assets/Courses-banner3.jfif"];
}

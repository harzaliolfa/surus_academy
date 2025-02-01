import { Component } from '@angular/core';
import { NavBarComponent } from "./shared/nav-bar/nav-bar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { CourseCardComponent } from "./features/courses/course-card/course-card.component";
import { CoursesListComponent } from "./features/courses/courses-home/courses-list/courses-list.component";
import { CoursesHomeComponent } from "./features/courses/courses-home/courses-home.component";

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, FooterComponent, CourseCardComponent, CoursesListComponent, CoursesHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'surus-academy-front';
}

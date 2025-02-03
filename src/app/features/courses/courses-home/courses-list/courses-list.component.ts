import { Component, inject } from '@angular/core';
import { CourseCardComponent } from "../../course-card/course-card.component";
import { Course } from '../../../../shared/models/course';
import { CourseService } from '../../../../shared/data-access/course.service';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCardComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {
  courseList:Course[];
  private courseService= inject(CourseService) ;
  constructor() {
    this.courseList= this.courseService.getAllCourses();
  }

}

import { Component, inject, Input } from '@angular/core';
import { Course } from '../../../shared/models/course';
import {Router, RouterModule} from '@angular/router';
import { CourseService } from '../../../shared/data-access/course.service';


@Component({
  selector: 'app-course-card',
  imports: [RouterModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

@Input() course!: Course ;
courseService = inject(CourseService);
constructor(private router: Router) { }
sendCourseId() {
  this.courseService.setSelectedCourseId(this.course.id);
}

}

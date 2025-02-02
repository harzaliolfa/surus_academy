import { Component } from '@angular/core';
import { Course } from '../../../shared/models/course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../shared/data-access/course.service';

@Component({
  selector: 'app-course-detail',
  imports: [],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
goToCourses() {
throw new Error('Method not implemented.');
}
goBack() {
throw new Error('Method not implemented.');
}
  course!:Course;
  constructor(private route : ActivatedRoute, private courseService: CourseService) {
  }
  ngOnInit(){
    const courseId =this.route.snapshot.params['id'];
    this.course = this.courseService.getCourseById(courseId);
  }

}

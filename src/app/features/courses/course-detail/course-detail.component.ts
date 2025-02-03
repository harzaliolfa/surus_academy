import { Component } from '@angular/core';
import { Course } from '../../../shared/models/course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../shared/data-access/course.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  imports: [],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
  course!:Course;
  errorMessage: string | null = null;
  constructor(
    private route : ActivatedRoute, 
    private router: Router, 
    private courseService: CourseService,

  ) {
  }
  ngOnInit(){
    const courseId =this.route.snapshot.params['id'];
    this.loadCourse(courseId);
  }
   
  private loadCourse(id: number): void {
    this.courseService.getCourseById(id).subscribe({
      next : (course)=>{
        if(course){
          this.course = course;
          this.errorMessage = null;
        }else{
          this.handleCoursNotFound();
        }
      },
      error: (err)=>{
        this.errorMessage = err;
        this.handleCoursNotFound();
      }
      
    })


}
handleCoursNotFound() {
  this.errorMessage = 'Course not found!';
  this.router.navigate(['/Courses']);

}  
goBack(url:string) {
  console.log(url);
this.router.navigate([url]);
}
}


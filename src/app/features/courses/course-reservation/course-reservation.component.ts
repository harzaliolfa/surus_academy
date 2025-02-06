import { Component, OnInit, inject } from '@angular/core';
import { CourseService } from '../../../shared/data-access/course.service';
import { CommonModule } from '@angular/common';
import { Course } from '../../../shared/models/course';


@Component({
  selector: 'app-course-reservation',
  templateUrl: './course-reservation.component.html',
  styleUrls: ['./course-reservation.component.css'], // ✅ Changed `styleUrl` to `styleUrls` (correct syntax)
  standalone: true, // ✅ Add this if you're using standalone components (optional based on your setup)
  imports: [CommonModule]       // ✅ Only needed if using standalone components with other modules
})
export class CourseReservationComponent implements OnInit {  // ✅ Implement OnInit interface
  courseId!: number;
  selectedCourese!:Course;
  courseService = inject(CourseService);
screenWidth: any;
courses: Course[] = [];

  constructor() {

  }

  ngOnInit(): void { 
    // Try to get courseId from localStorage first
    const savedCourseId = localStorage.getItem('selectedCourseId');
    if (savedCourseId) {
      this.courseId = parseInt(savedCourseId, 10);
      this.loadCourseData(this.courseId);
    }
  
    // Subscribe to selectedCourseId$ and update storage
    this.courseService.selectedCourseId$.subscribe((id) => {
      if (id) {
        this.courseId = id;
        localStorage.setItem('selectedCourseId', id.toString()); // ✅ Save it in localStorage
        this.loadCourseData(id);
      }
    });
  
    // Load all courses
    this.courses = this.courseService.getAllCourses();
  }
  
  // ✅ New method to load course data
  loadCourseData(courseId: number): void {
    this.courseService.getCourseById(courseId).subscribe((course: Course | null) => {
      if (course) {
        this.selectedCourese = course;
      }
    });
  }
  
}

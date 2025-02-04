import { Component, OnInit, inject } from '@angular/core';
import { CourseService } from '../../../shared/data-access/course.service';

@Component({
  selector: 'app-course-reservation',
  templateUrl: './course-reservation.component.html',
  styleUrls: ['./course-reservation.component.css'], // ✅ Changed `styleUrl` to `styleUrls` (correct syntax)
  standalone: true, // ✅ Add this if you're using standalone components (optional based on your setup)
  imports: []       // ✅ Only needed if using standalone components with other modules
})
export class CourseReservationComponent implements OnInit {  // ✅ Implement OnInit interface
  courseId: number | null = null;
  courseService = inject(CourseService);

  constructor() {}

  ngOnInit(): void {  // ✅ Ensure proper signature for lifecycle hook
    this.courseService.selectedCourseId$.subscribe((id) => {
      this.courseId = id; // ✅ Correctly assign received Course ID
      console.log('Received Course ID:', this.courseId);
    });
  }
}

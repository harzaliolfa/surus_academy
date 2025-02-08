import { Component, OnInit, inject } from '@angular/core';
import { CourseService } from '../../../shared/data-access/course.service';
import { CommonModule } from '@angular/common';
import { Course } from '../../../shared/models/course';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { last } from 'rxjs';
import { ReservationService } from '../../../shared/data-access/reservation.service';
import { Reservation } from '../../../shared/models/reservation';

@Component({
  selector: 'app-course-reservation',
  templateUrl: './course-reservation.component.html',
  styleUrls: ['./course-reservation.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class CourseReservationComponent implements OnInit {
  courseId!: number;
  selectedCourese!: Course;
  courseService = inject(CourseService);
  resravationService = inject(ReservationService);
  screenWidth: any;
  courses: Course[] = [];

  reservationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      course: [this.courseId, Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9+]*$'),Validators.minLength(6)]], // Added + to the accepted pattern
      address: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const savedCourseId = localStorage.getItem('selectedCourseId');
    if (savedCourseId) {
      this.courseId = parseInt(savedCourseId, 10);
      this.loadCourseData(this.courseId);
      this.reservationForm.patchValue({ course: this.selectedCourese.name });
    }

    this.courseService.selectedCourseId$.subscribe((id) => {
      if (id) {
        this.courseId = id;
        localStorage.setItem('selectedCourseId', id.toString());
        this.loadCourseData(id);
        this.reservationForm.patchValue({ course: this.selectedCourese.name }); // Update form control
      }
    });

    this.courses = this.courseService.getAllCourses();
  }

  // Method to load course data
  loadCourseData(courseId: number): void {
    this.courseService.getCourseById(courseId).subscribe((course: Course | null) => {
      if (course) {
        this.selectedCourese = course;
      }
    });
  }

  handleSubmit() {
    if (this.reservationForm.valid) {
      const reseravation : Reservation = this.reservationForm.value;
      this.resravationService.addReservation(reseravation);
      
    } else {
      console.error('Form is invalid');
    }
  }
}
import { Component, OnInit, inject } from '@angular/core';
import { CourseService } from '../../../shared/data-access/course.service';
import { CommonModule } from '@angular/common';
import { Course } from '../../../shared/models/course';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { last } from 'rxjs';
import { ReservationService } from '../../../shared/data-access/reservation.service';
import { Reservation } from '../../../shared/models/reservation';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-reservation',
  templateUrl: './course-reservation.component.html',
  styleUrls: ['./course-reservation.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule]
})
export class CourseReservationComponent implements OnInit {
  courseId!: number;
  selectedCourese!: Course;
  courseService = inject(CourseService);
  resravationService = inject(ReservationService);
  screenWidth: any;
  courses: Course[] = [];

  reservationForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
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
    window.scrollTo(0, 0);

    this.getSelectedCourseName();

  }

  handleSubmit() {
    if (this.reservationForm.valid) {
      const reseravation : Reservation = this.reservationForm.value;
      this.resravationService.addReservation(reseravation);
      this.isSubmitted = true;
      
    } else {
      console.error('Form is invalid');
    }
  }

  private getSelectedCourseName():void{
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

  private  loadCourseData(courseId: number): void {
    this.courseService.getCourseById(courseId).subscribe((course: Course | null) => {
      if (course) {
        this.selectedCourese = course;
      }
    });
  }
}
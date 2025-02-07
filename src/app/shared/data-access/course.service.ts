import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseList: Course[] = [
    new Course(1, 'PMP Preparation', 'Master the Project Management Professional (PMP) certification with our comprehensive preparation course. Gain in-depth knowledge and practical skills to excel in project management.', 100, true, '2021-01-01', 'assets/pmp_prep.jpg'),
    new Course(2, 'AACE Preparation', 'Prepare for the AACE certification with our expert-led course. Learn the essential principles and practices to achieve excellence in cost engineering and project controls.', 200, false, '2021-01-02', 'assets/aace_prep.jpeg'),
    new Course(3, 'Document Control Certification', 'Achieve proficiency in document control with our certification course. Understand the best practices and tools to manage and control documents effectively.', 300, true, '2021-01-03', 'assets/document_control_prep.jpg'),
      // new Course(4, 'Course 4', 'look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.', 400, false, '2021-01-04', 'assets/trainig.PNG'),
      // new Course(5, 'Course 5', 'look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.', 500, true, '2021-01-05', 'assets/trainig.PNG'),
      // new Course(6, 'Course 6', 'look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.', 600, false, '2021-01-06', 'assets/trainig.PNG'),
      // new Course(7, 'Course 7', 'look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.', 700, true, '2021-01-07', 'assets/trainig.PNG'),
      // new Course(8, 'Course 8', 'look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.', 800, false, '2021-01-08', 'assets/trainig.PNG'),
  
    ]
    private selectedCourseId = new BehaviorSubject<number>(0); // Reactive data stream
    selectedCourseId$ = this.selectedCourseId.asObservable(); // Expose the data stream as an observable

  constructor() { }

  getAllCourses(): Course[] {
    return this.courseList;
  }
  getCourseById(id: number): Observable<Course | null> {
    const course = this.courseList.find(course => course.id == id) || null;
    return of(course);  
  }
  setSelectedCourseId(id: number) {
    this.selectedCourseId.next(id);  // Update the course ID
  }
  
}

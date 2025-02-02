import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseList:Course[]=[
      new Course(1, 'Contrary to popular belief', 'look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.', 100, true, '2021-01-01', 'assets/trainig.PNG'),
      new Course(2, 'Contrary to popular belief', 'look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.', 200, false, '2021-01-02', 'assets/trainig.PNG'),
      new Course(3, 'Contrary to popular belief', 'look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.', 300, true, '2021-01-03', 'assets/trainig.PNG'),
      new Course(4, 'Contrary to popular belief', 'look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.', 400, false, '2021-01-04', 'assets/trainig.PNG'),
      new Course(5, 'Contrary to popular belief', 'look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.', 500, true, '2021-01-05', 'assets/trainig.PNG'),
      new Course(6, 'Contrary to popular belief', 'look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.', 600, false, '2021-01-06', 'assets/trainig.PNG'),
      new Course(7, 'Contrary to popular belief', 'look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.', 700, true, '2021-01-07', 'assets/trainig.PNG'),
      new Course(8, 'Contrary to popular belief', 'look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.', 800, false, '2021-01-08', 'assets/trainig.PNG'),  
    ]

  constructor() { }

  getAllCourses(): Course[] {
    return this.courseList;
  }
  getCourseById(courseId: number): Course {
    const course = this.courseList.find(course => course.id == courseId);
    if (!course) {
        throw new Error('Course not found!');
    } else {
        return course;
    }
  }
}

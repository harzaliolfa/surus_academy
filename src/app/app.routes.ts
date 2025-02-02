import { Routes } from '@angular/router';
import { CoursesHomeComponent } from './features/courses/courses-home/courses-home.component';
import { CourseDetailComponent } from './features/courses/course-detail/course-detail.component';
import { CoursesListComponent } from './features/courses/courses-home/courses-list/courses-list.component';

export const routes: Routes = [
    { 
        path: 'Courses', 
        component: CoursesHomeComponent, 
        children: [
          { path: '', component: CoursesListComponent }, 
          { path: ':id', component: CourseDetailComponent },
        ]
      },

];

import { Routes } from '@angular/router';
import { CoursesHomeComponent } from './features/courses/courses-home/courses-home.component';
import { CourseDetailComponent } from './features/courses/course-detail/course-detail.component';
import { CoursesListComponent } from './features/courses/courses-home/courses-list/courses-list.component';
import { HomeComponent } from './features/home/home/home.component';
import { CourseReservationComponent } from './features/courses/course-reservation/course-reservation.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {path: 'Courses/Reservation', component: CourseReservationComponent},
    { 
        path: 'Courses', 
        component: CoursesHomeComponent, 
        children: [
          { path: '', component: CoursesListComponent }, 
          { path: ':id', component: CourseDetailComponent }
        ]
      },


];

import { Routes } from '@angular/router';
import { CoursesHomeComponent } from './features/courses/courses-home/courses-home.component';
import { CourseDetailComponent } from './features/courses/course-detail/course-detail.component';
import { CoursesListComponent } from './features/courses/courses-home/courses-list/courses-list.component';
import { HomeComponent } from './features/home/home/home.component';
import { CourseReservationComponent } from './features/courses/course-reservation/course-reservation.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { ResourcesComponent } from './features/resources/resources.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routes: Routes = [
  { path: 'Courses/Reservation', component: CourseReservationComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: '404', component: NotFoundComponent },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: CoursesListComponent },
    ]
  },
  {
    path: 'Courses',
    component: CoursesHomeComponent,
    children: [
      { path: '', component: CoursesListComponent },
      { path: ':id', component: CourseDetailComponent }
    ]
  },

  { path: '**', redirectTo: '/404' } // Wildcard route should be LAST
];

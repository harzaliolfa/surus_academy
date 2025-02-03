import { Component, Input } from '@angular/core';
import { Course } from '../../../shared/models/course';
import {Router, RouterModule} from '@angular/router';


@Component({
  selector: 'app-course-card',
  imports: [RouterModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

@Input() course!: Course ;
constructor(private router: Router) { }

}

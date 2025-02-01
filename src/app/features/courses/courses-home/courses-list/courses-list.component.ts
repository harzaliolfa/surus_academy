import { Component } from '@angular/core';
import { CourseCardComponent } from "../../course-card/course-card.component";
import { Course } from '../../../../shared/models/course';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCardComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {
  courseList:Course[]=[
    {
      id: 1,
      name: "Contrary to popular belief",
      imgURL: "assets/trainig.PNG",
      description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    },
    {
      id: 2,
      name: "Contrary to popular belief",
      imgURL: "assets/trainig.PNG",
      description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    },
    {
      id: 3,
      name: "Contrary to popular belief",
      imgURL: "assets/trainig.PNG",
      description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    },
    {
      id: 4,
      name: "Contrary to popular belief",
      imgURL: "assets/trainig.PNG",
      description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    },
    {
      id: 5,
      name: "Contrary to popular belief",
      imgURL: "assets/trainig.PNG",
      description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    },
    {
      id: 6,
      name: "Contrary to popular belief",
      imgURL: "assets/trainig.PNG",
      description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    },
    {
      id: 7,
      name: "Contrary to popular belief",
      imgURL: "assets/trainig.PNG",
      description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    },
    {
      id: 8,
      name: "Contrary to popular belief",
      imgURL: "assets/trainig.PNG",
      description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    },
    {
      id: 9,
      name: "Contrary to popular belief",
      imgURL: "assets/trainig.PNG",
      description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    },
    {
      id: 10,
      name: "Contrary to popular belief",
      imgURL: "assets/trainig.PNG",
      description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    },

  ]

}

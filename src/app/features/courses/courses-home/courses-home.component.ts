import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet } from '@angular/router';
import { CoursesListComponent } from "./courses-list/courses-list.component";
import { Routes } from '@angular/router';


@Component({
  selector: 'app-courses-home',
  imports: [NgbCarouselModule, RouterOutlet],
  templateUrl: './courses-home.component.html',
  styleUrls: ['./courses-home.component.css'],
})

export class CoursesHomeComponent {

  ngOnInit(): void {
    // Scroll to the top of the page when the component initializes
    window.scrollTo(0, 0);
  }
  images = ["assets/Courses-banner1.PNG", "assets/Courses-banner2.jpg", "assets/Courses-banner3.jfif"];
}


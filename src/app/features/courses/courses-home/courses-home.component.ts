import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-courses-home',
  imports: [NgbCarouselModule, RouterOutlet],
  templateUrl: './courses-home.component.html',
  styleUrls: ['./courses-home.component.css'],
})

export class CoursesHomeComponent {

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);}
  }
  images = ["assets/Courses-banner1.PNG", "assets/course-banner4.jpg", "assets/courses-banner-5.jpg"];
  @ViewChild('targetSection') targetSection!: ElementRef;


  scrollToTarget() {
    this.targetSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  

}



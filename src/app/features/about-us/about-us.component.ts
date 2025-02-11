import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  ngOnInit(): void {
    // Scroll to the top of the page when the component initializes
    window.scrollTo(0, 0);
  }
  benefits = [
    { title: "Standardization", description: "Ensures a consistent training experience worldwide." },
    { title: "Reduced Costs", description: "No cost to reproduce materials, thanks to mobile learning." },
    { title: "More Customization", description: "Learning is not one-size-fits-all. Tailored content improves engagement." },
    { title: "Affordable Pricing", description: "No cost to reproduce materials, thanks to mobile learning." },
    { title: "Learner Satisfaction", description: "High satisfaction rates ensure better retention." },
    { title: "Multimedia Materials", description: "Video, text, and interactive content for effective learning." }
  ];

}

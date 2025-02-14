import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule,
          CommonModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  isContactUsRoute : boolean = false;
  isReserveNowRoute: boolean = false; 
  isAboutUsRoute: boolean= false;
  isHomeRoute: boolean = false;
  isResourcesRoute: boolean = false;

  

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.isContactUsRoute = this.router.url === '/contact-us' 
        this.isReserveNowRoute = this.router.url === '/Courses/Reservation'
        this.isAboutUsRoute = this.router.url === '/about-us'
        this.isHomeRoute = this.router.url === '/'
        this.isResourcesRoute = this.router.url === '/resources'
      }    
    })}
    
    @HostListener('document:click', ['$event'])
    closeNavbar(event: PointerEvent): void {
      const targetElement = event.target as HTMLElement | null;
      if (!targetElement) return; // Ensure event target exists
  
      const navbar = document.querySelector('.navbar-collapse');
      const toggleButton = document.querySelector('.navbar-toggler');
  
      if (navbar && toggleButton) {
        const isExpanded = navbar.classList.contains('show'); // Check if navbar is open
        const clickedInsideNavbar = navbar.contains(targetElement);
        const clickedToggleButton = toggleButton.contains(targetElement);
  
        if (isExpanded && !clickedInsideNavbar && !clickedToggleButton) {
          (toggleButton as HTMLElement).click(); // Simulate click to close navbar
        }
      }
    }
}
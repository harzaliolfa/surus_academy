import { Component, OnInit } from '@angular/core';
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


  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.isContactUsRoute = this.router.url === '/contact-us' 
        this.isReserveNowRoute = this.router.url === '/Courses/Reservation'

      }
    })
  }

  


}

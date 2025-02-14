import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  imports: [],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent implements OnInit{
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);}  }

}

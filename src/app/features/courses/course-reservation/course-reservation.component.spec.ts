import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseReservationComponent } from './course-reservation.component';

describe('CourseReservationComponent', () => {
  let component: CourseReservationComponent;
  let fixture: ComponentFixture<CourseReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

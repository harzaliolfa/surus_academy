import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }

  addReservation(reservation: Reservation): void {
    // Add reservation to database
     
  }
}

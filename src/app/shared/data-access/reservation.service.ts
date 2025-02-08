import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }

  addReservation(reservation: Reservation): void {
    console.log('Reservation added to database', reservation);
     
  }
}

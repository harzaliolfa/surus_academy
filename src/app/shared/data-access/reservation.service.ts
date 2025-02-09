import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }

  addReservation(reservation: Reservation): void {
    const serviceID  = 'service_5baf7zc';
    const templateID= 'template_gnwol7k';
    const userID = 'k1-UK38jcQkMM_lou';
    const templateParams = {
      name : reservation.name,
      lastName : reservation.lastName,
      email: reservation.email,
      phone: reservation.phone,
      address: reservation.address,

    };

    emailjs.send(serviceID, templateID, templateParams, userID)
    .then(() => {
      alert('Message sent successfully!');
      reservation.name = '';
      reservation.lastName = '',
      reservation.email = '';
      reservation.phone = '';
      reservation.address = ''
    })
    .catch((error)=> {
      console.error('error making reservation : ', error);
      alert('Failed to make reservation ');

    })

    console.log('Reservation added to database', reservation);

     
  }
}

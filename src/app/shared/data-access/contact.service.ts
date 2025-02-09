import { Injectable } from '@angular/core';
import { ContactMessage } from '../models/contact';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  addContactMessage(contactMessage : ContactMessage){
    console.log('Contact message added to database', contactMessage);
    const serviceID  = 'service_5baf7zc';
    const templateID= 'template_gnwol7k';
    const userID = 'k1-UK38jcQkMM_lou';
    const templateParams = {
      name : contactMessage.name,
      email: contactMessage.email,
      message: contactMessage.message
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
    .then(() => {
      alert('Message sent successfully!');
      contactMessage.name = '';
      contactMessage.email = '';
      contactMessage.message = '';
    })
    .catch((error)=> {
      console.error('error sending message: ', error);
      alert('Failed to send message.');

    })
  }
}

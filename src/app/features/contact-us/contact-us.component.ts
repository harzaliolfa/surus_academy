import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact-us',
  imports: [FormsModule ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
    name: string = '';
    email: string = '';
    message: string = '';

    onSubmit(){
      if(! this.name || !this.email || this.message){
        alert('All fields are required');
        return;
      }
      const serviceID  = 'service_5baf7zc';
      const templateID= 'template_gnwol7k';
      const templateParams = {
        name : this.name,
        email: this.email,
        message: this.message
      };

      emailjs.send(serviceID, templateID, templateParams)
      .then(() => {
        alert('Message sent successfully!');
        this.name = '';
        this.email = '';
        this.message = '';
      })
      .catch((error)=> {
        console.error('error sending message: ', error);
        alert('Failed to send message.');

      })
    }

}

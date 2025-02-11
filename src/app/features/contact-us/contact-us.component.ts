import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ContactMessage } from '../../shared/models/contact';
import { ContactService } from '../../shared/data-access/contact.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact-us',
  imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
    name: string = '';
    email: string = '';
    message: string = '';
    contactForm: FormGroup;
    isSubmitted: boolean = false;
    contactService = inject(ContactService)
  
    constructor(private fb: FormBuilder, private router: Router ){
      this.contactForm = this.fb.group({
        name : ['', Validators.required],
        email:  ['', Validators.required],
        message:  ['', Validators.required],
      })
    }
    ngOnInit(): void {
      // Scroll to the top of the page when the component initializes
      window.scrollTo(0, 0);
    }

    onSubmit(){
      if(this.contactForm.valid){
        const contactMessage : ContactMessage = this.contactForm.value;
         this.isSubmitted = true; 
         this.contactService.addContactMessage(contactMessage);
         console.error('Message sent successfully!!');
      }
      else{
        console.error('Form is invalid')
      }
    }
}

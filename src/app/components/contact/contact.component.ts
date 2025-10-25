import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // TODO: Replace 'YOUR_FORM_ID' with your actual Formspree form ID
  // Get it from: https://formspree.io/forms (after signing up for free)
  private formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
  
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;
  submitting = false;
  error = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.isFormValid() && !this.submitting) {
      this.submitting = true;
      this.error = false;

      // Send to Formspree
      this.http.post(this.formspreeEndpoint, this.formData).subscribe({
        next: (response) => {
          console.log('Email sent successfully!', response);
          this.submitted = true;
          this.submitting = false;
          
          // Reset form after 3 seconds
          setTimeout(() => {
            this.formData = {
              name: '',
              email: '',
              subject: '',
              message: ''
            };
            this.submitted = false;
          }, 3000);
        },
        error: (error) => {
          console.error('Error sending email:', error);
          this.error = true;
          this.submitting = false;
          
          // Hide error after 5 seconds
          setTimeout(() => {
            this.error = false;
          }, 5000);
        }
      });
    }
  }

  isFormValid(): boolean {
    return !!(
      this.formData.name &&
      this.formData.email &&
      this.formData.subject &&
      this.formData.message
    );
  }
}


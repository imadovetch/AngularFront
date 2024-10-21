import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  imports: [FormsModule]  
})
export class SignInComponent {
  
  // Define user object to hold form data
  user = {
    password: '',
    
    email: '',
  
  };

  constructor() {}

  onSubmit() {
    console.log('User signed in:', this.user);
  }
}

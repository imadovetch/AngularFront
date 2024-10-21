import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-sign-up',
  standalone: true, 
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  imports: [FormsModule]  
})
export class SignUpComponent {
  
  // Define user object to hold form data
  user = {
    name: '',
    age: null,
    address: '',
    email: '',
    phone: ''
  };

  constructor() {}

  onSubmit() {
    console.log('User signed up:', this.user);
  }
}

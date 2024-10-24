import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../auth.service'; // Update the path according to your project structure

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Updated to match a 10-digit phone number
      age: ['', [Validators.required]],
      address: ['', [Validators.required]], // Added address field
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  // Strong typing for AbstractControl
  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    // Prepare the payload to match the required structure
    const userData = {
      name: this.signupForm.value.username,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      phoneNumber: this.signupForm.value.phone,
      adresse: this.signupForm.value.address,
      age: this.signupForm.value.age
    };

    this.authService.signup(userData).subscribe({
      next: (res) => {
        console.log('Signup successful!', res);
      },
      error: (err) => {
        console.error('Signup failed!', err);
      },
    });
  }

  newSignup(): void {
    this.submitted = false;
    this.signupForm.reset();
  }
}

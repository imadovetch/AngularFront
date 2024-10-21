import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { SignupComponent } from './sign-up/sign-up.component'; // Import SignupComponent

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent // Declare SignupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Add ReactiveFormsModule to imports
    HttpClientModule, // Add HttpClientModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

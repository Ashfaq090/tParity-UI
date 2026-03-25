import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import AuthService from '../../services/authService';
import authService from '../../services/authService';

declare global {
  interface Window {
    google: any;
  }
}

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login Data:', this.loginForm.value);
      const reqBody = {
        user_name: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      this.authService.login(reqBody)
      .then(response => {
        console.log('Login successful:', response);
      })
      .catch(error => {
        console.error('Login failed:', error);
      });
    } else {
      console.log('Form is invalid');
      this.loginForm.markAllAsTouched();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.waitForGoogle();
    }
  }

  private waitForGoogle() {
    if (window.google?.accounts?.id) {
      this.initGoogle();
    } else {
      setTimeout(() => this.waitForGoogle(), 100);
    }
  }

  private initGoogle() {
    window.google.accounts.id.initialize({
      client_id: '166510457587-2avg8jueootqc26b6ujvjp3i0mjq1f6i.apps.googleusercontent.com',
      callback: (response: any) => this.handleCredentialResponse(response),
      use_fedcm_for_prompt: false
    });
  }

  private handleCredentialResponse(response: any) {
    console.log('Google ID Token:', response.credential);
    // Handle the token (send to backend)
    this.authService.googleLogin({ token: response.credential })
    .then(res => {
      console.log('Google login successful:', res);
    }).catch(err => {
      console.error('Google login failed:', err);
    });
  }

  loginWithGooglePopup() {
    window.google.accounts.id.prompt();
  }
}

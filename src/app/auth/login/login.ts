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
      this.renderHiddenButton();
    } else {
      setTimeout(() => this.waitForGoogle(), 100);
    }
  }

  private initGoogle() {
    window.google.accounts.id.initialize({
      client_id: '882752959104-c31jblq3qrtm5vn2av2i2rt6kdrr8f1n.apps.googleusercontent.com',
      callback: (response: any) => this.handleCredentialResponse(response),
      use_fedcm_for_prompt: false,
      cancel_on_tap_outside: false,
    });
  }

  private renderHiddenButton() {
    window.google.accounts.id.renderButton(
      document.getElementById('google-btn-hidden')!,
      {
        type: 'standard',
        theme: 'outline',
        size: 'large',
      }
    );
  }

  private handleCredentialResponse(response: any) {
    console.log('Google ID Token:', response);
    // Handle the token (send to backend)
    this.authService.googleLogin({ token: response.access_token })
    .then(res => {
      console.log('Google login successful:', res);
    }).catch(err => {
      console.error('Google login failed:', err);
    });
  }

  loginWithGooglePopup() {
    // window.google.accounts.id.prompt();
    // window.google.accounts.oauth2.initCodeClient({
    //   client_id: '882752959104-c31jblq3qrtm5vn2av2i2rt6kdrr8f1n.apps.googleusercontent.com',
    //   scope: 'email profile openid',
    //   callback: (response: any) => this.handleCredentialResponse(response),
    //   prompt: 'select_account'   // ← forces account selection every time
    // }).requestCode();
    window.google.accounts.oauth2.initTokenClient({
      client_id: '882752959104-c31jblq3qrtm5vn2av2i2rt6kdrr8f1n.apps.googleusercontent.com',
      scope: 'email profile openid',
      callback: (response: any) => this.handleCredentialResponse(response),
      prompt: 'select_account'   // ← forces account selection every time
    }).requestAccessToken();
  }

}

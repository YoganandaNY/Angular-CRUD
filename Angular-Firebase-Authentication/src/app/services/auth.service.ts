import { Injectable, NgZone } from '@angular/core';
import {
  Auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  sendEmailVerification,
  User,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  UserData: any;
  constructor(
    private auth: Auth,
    private router: Router,
    public ngZone: NgZone
  ) {
    onAuthStateChanged(this.auth, (user: any) => {
      if (user) {
        this.UserData = user;
        localStorage.setItem('user', JSON.stringify(this.UserData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // get User
  // get Authenticated user  from firebase
  getAuthFire() {
    return this.auth.currentUser;
  }

  // get Authenticated user from local storage
  getAuthLocal() {
    const token = localStorage.getItem('user');
    const user = JSON.parse(token as string);
    return user;
  }

  // Check Whether user is Logged In or not
  get isLoggedIn(): boolean {
    const token = localStorage.getItem('user');
    const user = JSON.parse(token as string);
    return user !== null ? true : false;
  }

  // Register Method
  Register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((res) => {
        this.UserData = res.user;
        this.ngZone.run(() => {
          /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
          this.router.navigate(['/dashboard']);
        });
      })
      .catch((err) => window.alert(err.message));
  }

  // Login Method
  Login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((res: any) => {
        this.UserData = res.user;
        this.ngZone.run(() => {
          this.router.navigate(['/dashboard']);
        });
      })
      .catch((err) => window.alert(err.message));
  }

  // Forgot password
  ForgotPassword(email: string) {}

  // Logout
  Logout() {
    signOut(this.auth).then(() => this.router.navigate(['/sign-in']));
  }

  // Login with Email or Facebook
  // Login with Google
  GoogleAuth() {
    return this.loginWithPopup(new GoogleAuthProvider());
  }

  //Login with Facebook
  //FacebookAuth() {
  //  return this.loginWithPopup(new FacebookAuthProvider());
  //}

  // Pop Up Provider
  loginWithPopup(Provider: any) {
    return signInWithPopup(this.auth, Provider).then(() => {
      this.router.navigate(['dashboard']);
    });
  }

  // Send Password Reset Email
  async sendPasswordResetEmails(email: string) {
    return sendPasswordResetEmail(this.auth, email)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((err) => window.alert(err.message));
  }

  // Send Email Verification
  sendEmailVerification() {
    return sendEmailVerification(this.auth.currentUser as User);
  }
}

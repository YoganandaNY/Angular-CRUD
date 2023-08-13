import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public auth: AngularFireAuth,
    public router: Router,
    public toastrService: ToastrService
  ) {}

  SignInCopy(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  SignUp(email: string, password: string) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.toastrService.success('Register Successfuly!', 'Success!', {
          positionClass: 'toast-top-center',
        });
        window.alert('Registration Success');
        this.router.navigate(['dashboard']);
      })
      .catch((err) =>
        this.toastrService.error(err.message, 'Error!', {
          positionClass: 'toast-top-center',
        })
      );
  }

  signOut(): Promise<void> {
    return this.auth.signOut();
  }

  // Get the currently logged-in user
  getCurrentUser(): Observable<any> {
    return this.auth.user;
  }

  isLoggedIn(): Observable<any> {
    return this.auth.user;
  }
}

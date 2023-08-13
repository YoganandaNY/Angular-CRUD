import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private shareService: SharedService,
    private toastrService: ToastrService
  ) {
    this.shareService.loginButtonFlag.next(false);
    this.shareService.logoutButtonFlag.next(false);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(data: FormGroup) {
    console.log(data.value);
    this.authService
      .SignInCopy(data.value.username, data.value.password)
      .then((res) => {
        if (res) {
          this.toastrService.success('Login Successful!', 'Success!', {
            positionClass: 'toast-top-center',
          });
          //window.alert('Login Successful');
          this.router.navigate(['dashboard']);
        }
      })
      .catch((err) =>
        this.toastrService.error(err.message, 'Error!', {
          positionClass: 'toast-top-center',
        })
      );
  }
}

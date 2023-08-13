import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  SignUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sharedService: SharedService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.SignUpForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.sharedService.loginButtonFlag.next(true);
  }

  register(data: FormGroup) {
    console.log(data.value);
    this.authService.SignUp(data.value.username, data.value.password);
  }
}

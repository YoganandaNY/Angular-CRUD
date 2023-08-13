import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SharedService } from './services/shared.service';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular 14 Firebase Authentication';

  currentLoggedInUserEmail: any;
  logoutButtonFlag: any;
  loginButtonFlag: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private shared: SharedService
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((data) => {
      this.currentLoggedInUserEmail = data;
    });

    this.shared.loginButtonFlag.subscribe((data) => {
      this.loginButtonFlag = data;
    });

    this.shared.logoutButtonFlag.subscribe((data) => {
      this.logoutButtonFlag = data;
    });
  }

  confirmLogoutDialog() {
    const ref: MatDialogRef<ConfirmDialogComponent> = this.dialog.open(
      ConfirmDialogComponent,
      {
        width: '400px',
        height: '190px',
        data: {
          message: 'Are you sure to logout?',
        },
        backdropClass: 'confirmDialogComponent',
        hasBackdrop: true,
      }
    );

    ref.afterClosed().subscribe((data) => {
      if (data.clicked === 'submit') {
        this.authService
          .signOut()
          .then(() => {
            this.router.navigate(['login']);
          })
          .catch((error) => {
            window.alert(error.message);
          });
      }
    });
  }
}

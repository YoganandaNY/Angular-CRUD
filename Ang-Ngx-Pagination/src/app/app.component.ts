import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: any;
  p: number = 1;
  total: number = 0;

  constructor(private userservice: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  getUsers() {
    this.userservice.getUsers(this.p).subscribe((response: any) => {
      this.users = response.data;
      this.total = response.total;
      console.log('Data' + JSON.stringify(this.users));
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  pageChangeEvent(event: number) {
    this.p = event;
    this.getUsers();
  }
}

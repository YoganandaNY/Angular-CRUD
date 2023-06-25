import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number) {
    return this.http.get(this.url + '?page=' + page);
  }
}

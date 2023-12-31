import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  url = 'https://angular-authentication-cefa5-default-rtdb.firebaseio.com';
  url1 = 'https://dummyjson.com/users';

  getUserData() {
    //return this.http.get(this.url + '/' + 'users.json');
    return this.http.get(this.url1);
  }
}

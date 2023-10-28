import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiRegUrl = 'http://localhost:5000/register';
  private apiLoginUrl = 'http://localhost:5000/login';
  constructor(private http: HttpClient) {}
  createUserData(userData: any) {
    // console.log('service2:', userData); //user data is body
    return this.http.post(this.apiRegUrl, userData); //task event golea backend e patacci
  }
  checkLoginData(userLoginData: any) {
    return this.http.post(this.apiLoginUrl, userLoginData);
  }
}

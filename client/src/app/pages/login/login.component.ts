import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private userService: UserService) {}
  userLoginData = {
    email: '',
    password: '',
  };
  onLoginSubmit() {
    console.log('fe:', this.userLoginData);
    this.userService.checkLoginData(this.userLoginData).subscribe((response: any) => {
      console.log('res fe:', response);
      if (response.message == 'successfully login') {
        this.router.navigate(['/']);
      }
      else {
        console.log('invallid');
      }
      });
    this.userLoginData = {
      email: '',
      password: '',
    };
  }
}

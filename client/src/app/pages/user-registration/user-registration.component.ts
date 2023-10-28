import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile: string;
};

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  constructor(private router: Router, private userService: UserService) {}

  userData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
  };
  

  onRegSubmit() {
    console.log(this.userData);
    this.userService
      .createUserData(this.userData)
      .subscribe((response: any) => {
        console.log('Event created:', response);
      });
    this.userData = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      mobile: '',
    };
  }
}

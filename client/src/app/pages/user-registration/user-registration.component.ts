import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';
// import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor(
    private router: Router,
    private userService: UserService,
    // private snackBar: MatSnackBar
  ) {}

  userData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
  };
  responseMessage!: string;

  onRegSubmit() {
    console.log(this.userData);
    this.userService
      .createUserData(this.userData)
      .subscribe((response: any) => {
        console.log('Event created:', response);
        this.responseMessage = response.message;
      });
    this.userData = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      mobile: '',
    };
    // this.snackBar.open(this.responseMessage, 'Close', {
    //   duration: 5000, // Time in milliseconds to display the notification (adjust as needed)
    // });

    if (this.responseMessage === 'User is created successfully') {
      console.log('login');

      this.router.navigate(['/login']);
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {

  userData = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    mobile:'',
  }

  onSubmit() {
    console.log(this.userData);
    this.userData = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      mobile: '',
    };
   
  }
}

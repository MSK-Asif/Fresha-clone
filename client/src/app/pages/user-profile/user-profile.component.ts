import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  userData: { name: string; email: string } = { name: '', email: '' };

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit(): void {
    // this.userService.getProfileData().subscribe((response: any) => {
    //   const user = response.user;
    //   //console.log("u", user.user.email);
    //   //console.log("profile:", response);
    //   this.userData.email = user.email;
    // });
    const user = this.userService.getProfileData();
    console.log('profile==>>',user);
  }
}

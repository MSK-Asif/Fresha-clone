import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { ShopSelectedComponent } from './pages/shop-selected/shop-selected.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchResultComponent },
  { path: 'select', component: ShopSelectedComponent },
  { path: 'book', component: BookingComponent },
  { path: 'confirm', component: ConfirmationComponent },
  { path : 'profile', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

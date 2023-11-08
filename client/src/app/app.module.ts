import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { ShopSelectedComponent } from './pages/shop-selected/shop-selected.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { BookingComponent } from './pages/booking/booking.component';
import { FormsModule } from '@angular/forms';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { HeaderComponent } from './components/header/header.component';
import { AllServicesComponent } from './components/all-services/all-services.component';
import { SelectedServicesComponent } from './components/selected-services/selected-services.component';
import { MapComponent } from './components/map/map.component';
import { ReviewCartsComponent } from './components/review-carts/review-carts.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { DateTimeComponent } from './components/date-time/date-time.component';
import { TeamSelectComponent } from './components/team-select/team-select.component';
import { BookingService } from './services/booking.service';
import { CancellationPolicyComponent } from './components/cancellation-policy/cancellation-policy.component';
import { SuccessComponent } from './components/success/success.component';
import { MapAllComponent } from './components/map-all/map-all.component';
import { ResourcePlanningComponent } from './business/resource-planning/resource-planning.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RecommendedComponent,
    HomeComponent,
    LoginComponent,
    SearchResultComponent,
    ShopSelectedComponent,
    FooterComponent,
    UserRegistrationComponent,
    BookingComponent,
    ShopCartComponent,
    HeaderComponent,
    AllServicesComponent,
    SelectedServicesComponent,
    MapComponent,
    ReviewCartsComponent,
    ConfirmationComponent,
    UserProfileComponent,
    DateTimeComponent,
    TeamSelectComponent,
    CancellationPolicyComponent,
    SuccessComponent,
    MapAllComponent,
    ResourcePlanningComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ],
  providers: [UserService, BookingService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiBookServiceUrl = 'http://localhost:5000/serviceBooking';
  constructor(private http: HttpClient) {}

  userBooking(data: any) {
    console.log('data', data);
    return this.http.post(this.apiBookServiceUrl, data);
  }
  getUserBookingInfo() {
    return this.http.get(this.apiBookServiceUrl);
  }
}

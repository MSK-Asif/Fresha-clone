import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class businessService {
  private apiAllShopDataUrl = 'http://localhost:5000/shop-data';
  private apiShopDataUrl = 'http://localhost:5000/select/';
  private apiBusinessDataUrl = 'http://localhost:5000/business';

  constructor(private http: HttpClient) {}

  getShopData(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiShopDataUrl + id}`);
  }
  createBookingByOwner(userData: any) {
    // console.log('service2:', userData); //user data is body
    return this.http.post(this.apiBusinessDataUrl, userData); //user gola backend e patacci
  }
}

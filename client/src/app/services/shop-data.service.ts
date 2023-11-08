import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopDataService {
  private apiAllShopDataUrl = 'http://localhost:5000/shop-data';
  private apiShopDataUrl = 'http://localhost:5000/select/';
  private apiSearchDataUrl = 'http://localhost:5000/search';

  constructor(private http: HttpClient) { }
  getAllShopData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiAllShopDataUrl}`);
  }
  getShopData(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiShopDataUrl + id}`);
  }

  sentSearchData(data: any) {
    return this.http.get(`${this.apiSearchDataUrl}/${data.id}/${data.location}`); //user gola backend e patacci
  }
}
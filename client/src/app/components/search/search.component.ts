import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  
  searchText: string = '';
  mapArea: string = '';

  constructor(private http: HttpClient, private router: Router) { }
  searchParam={service: '', location: ''};

  
  performSearch() {
    this.searchParam.service = this.searchText;
    this.searchParam.location = this.mapArea;
    console.log('hi ', this.searchParam);
    // routerLink = '/search/{{searchParam}}';
    this.router.navigate([
      `/search/${this.searchParam.service}+${this.searchParam.location}`,
    ]);
    
  };

  }


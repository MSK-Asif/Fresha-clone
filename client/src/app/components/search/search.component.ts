import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  services: { [key: string]: string } = {
    'Crew Cut': 'sr1',
    'Hair Coloring - Partial Highlights': 'sr3',
    'Hair Removal - Laser': 'sr27',
    'Hair Coloring - Full Highlights': 'sr4',
    'Hair Spa Treatment': 'sr7',
    'Beard Trim': 'sr8',
  };
  servicesArr = [
    'Crew Cut',
    'Hair Coloring - Partial Highlights',
    'Hair Removal - Laser',
    'Hair Coloring - Full Highlights',
    'Hair Spa Treatment',
    'Beard Trim',
  ];
  searchText: string = '';
  mapArea: string = '';
  selectedService: string='';

  constructor(private http: HttpClient, private router: Router) {}
  searchParam = { service: '', location: '' };
  onServiceSelect(serviceName: string) {
    this.selectedService = this.services[serviceName];
  }
  performSearch() {
    
    this.searchParam.service = this.services[this.selectedService];
    this.searchParam.location = this.mapArea;
    console.log('hi ', this.searchParam);
    // routerLink = '/search/{{searchParam}}';
    this.router.navigate(['/search'], {
      queryParams: {
        id: this.searchParam.service,
        location: this.searchParam.location,
      },
    });
  }
}


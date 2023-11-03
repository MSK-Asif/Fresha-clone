import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  location: string = '';
  date: string = '';
  time: string = '';
  selectedTreatment: string = '';

  treatmentOptions: string[] = [
    'Haircut',
    'Coloring',
    'Hairstyle',
    'Treatments',
    'Facials',
    'Manicure',
    'Waxing',
    'Massage',
  ];
  cities: string[] = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Miami',
    'San Francisco',
    'Seattle',
    // Add more cities as needed
  ];
  citySuggestions: string[] = [];

  searchClick() {
    // Here, you can use the 'location', 'date', and 'time' variables to filter your data or perform the search operation.
    // You might want to implement a service to fetch and filter the data based on these parameters.
  }
  showCitySuggestions() {
    if (this.location) {
      this.citySuggestions = this.cities.filter((city) =>
        city.toLowerCase().includes(this.location.toLowerCase())
      );
    } else {
      this.citySuggestions = [];
    }
  }

  selectCity(city: string) {
    this.location = city;
    this.citySuggestions = [];
  }

  searchText: string = '';
  mapArea: string = '';
  selectedDate: string = '';
  selectedTime: string = '';

  performSearch() {
    // Implement your search logic here
    console.log('Search Text:', this.searchText);
    console.log('Map Area:', this.mapArea);
    console.log('Date:', this.selectedDate);
    console.log('Time:', this.selectedTime);
  }
}

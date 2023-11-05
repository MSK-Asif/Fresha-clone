import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.css'],
})
export class AllServicesComponent {
  selectedId: string[] = [];

  @Input() shopServicesDetail: any;

  @Output() setService = new EventEmitter<string[]>();
  storedData: any;
  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      // Convert your data to a JSON string
      this.storedData = localStorage.getItem('storeServiceIds');
      if (this.storedData) {
        this.selectedId = JSON.parse(this.storedData);
      }
    }
  }
  toggleIcon(service: any) {
    const id = service.service_id;
    if (this.selectedId.includes(id)) {
      this.selectedId = this.selectedId.filter((item) => item !== id);
    } else {
      this.selectedId.push(id);
    }
    localStorage.setItem('storeServiceIds', JSON.stringify(this.selectedId));
    this.setService.emit(this.selectedId);
  }

  checkSelected(id: string): boolean {
    return this.selectedId.includes(id);
  }
}

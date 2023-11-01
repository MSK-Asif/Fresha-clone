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

  toggleIcon(service: any) {
    const id = service.service_id;
    if (this.selectedId.includes(id)) {
      this.selectedId = this.selectedId.filter((item) => item !== id);
    } else {
      this.selectedId.push(id);
    }
    this.setService.emit(this.selectedId);
    console.log('all==', this.shopServicesDetail);
  }

  // callService(val: string) {
  //   this.setService.emit(val);
  // }

  getSelected(id: string): boolean {
    return this.selectedId.includes(id);
  }
}

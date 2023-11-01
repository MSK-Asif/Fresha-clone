import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.css'],
})
export class AllServicesComponent {
  selected: boolean = false;
  serviceName: string = 'Hair cut';

  @Output() setService = new EventEmitter<string>();

  
  toggleIcon() {
    this.selected = !this.selected;
    this.setService.emit(this.serviceName);
  }

  callService(val: string) {
    this.setService.emit(val);
    
  }
}

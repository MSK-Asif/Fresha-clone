import { Component } from '@angular/core';

@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.css'],
})
export class TeamSelectComponent {
  selectMember() {
    console.log('selectMember' );
  }
}

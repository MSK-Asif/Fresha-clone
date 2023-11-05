import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.css'],
})
export class TeamSelectComponent {
  @Input() teamMembers: any;
  @Output() teamName = new EventEmitter<string>();

  selectMember(val: number) {
    if (val === -1) {
      this.sendSelectedTeamName('any');
    }
    else {
      this.sendSelectedTeamName(this.teamMembers[val]);
    }
  }

  sendSelectedTeamName(val: string) {
    this.teamName.emit(val);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  menuOpen = false;
  homePath = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  ngOnInit() {
    const currentPath = this.router.url;
    if (currentPath === '/') {
      this.homePath = true;
    }
    console.log('Current Page Path:', currentPath);
  }
}

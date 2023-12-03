import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: MenuItem[] = [
    {
      label: 'Upcoming',
      icon: 'pi pi-fw pi-file',
      routerLink: 'upcoming'
    },
    {
      label: 'Movies',
      icon: 'pi pi-ticket',
      routerLink: 'search-movies',
    },
    {
      label: 'Series',
      icon: 'pi pi-server',
      routerLink: 'search-series',
    },
  ];
}

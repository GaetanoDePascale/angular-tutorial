import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'menu-popup-demo',
  templateUrl: './menu-popup-demo.html',
  providers: [MessageService],
  imports: [MenuModule, ToastModule, ButtonModule],
  standalone: true,
})
export class MenuPopupDemo implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Homes',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Counter',
        icon: 'pi pi-calculator',
        routerLink: '/counter',
        queryParams: { step: 1 },
      },
      {
        label: 'Form',
        icon: 'pi pi-code',
        routerLink: '/hero',
      },
    ];

    console.log(this.items);
  }
}

import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MenuPopupDemo } from './components/menu/menu-popup-demo';
import { DynamicModule } from './dynamic/dynamic.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, MenuPopupDemo, DynamicModule],
  template: `
    <main>
      <div class="divTable">
        <div class="divTableBody">
          <div class="divTableRow">
            <div class="divTableCell">
              <a [routerLink]="['/']">
                <header class="brand-name">
                  <img
                    class="brand-logo"
                    src="/assets/logo.svg"
                    alt="logo"
                    aria-hidden="true"
                  />
                </header>
              </a>
            </div>
            <div class="rightAlign divTableCell" style="text-align: right;">
              <menu-popup-demo></menu-popup-demo>
            </div>
          </div>
        </div>
      </div>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}

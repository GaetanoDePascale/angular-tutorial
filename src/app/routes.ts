import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CounterComponent } from './counter/counter.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ObservableTestComponent } from './observable-test/observable-test.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
  {
    path: 'counter',
    component: CounterComponent,
    title: 'Angular Counter',
  },
  {
    path: 'hero',
    component: HeroFormComponent,
    title: 'Hero Form',
  },
  {
    path: 'observable',
    component: ObservableTestComponent,
    title: 'Observable',
  },
];

export default routeConfig;

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { ApplicationService } from '../housing.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    InputTextareaModule,
  ],
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {
  visible: boolean = false;
  heroList: Hero[] = [];
  heroFilteredList: Hero[] = [];

  hero: Hero = new Hero(undefined, '', '', '', '');

  heroService = inject(ApplicationService);

  constructor() {
    this.heroService.getAllHeroes().then((heroList: Hero[]) => {
      this.heroList = heroList;
      this.heroFilteredList = heroList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.heroFilteredList = this.heroList;
    }

    this.heroFilteredList = this.heroList.filter((hero) =>
      hero?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  showDialog(hero: Hero | undefined) {
    this.hero = hero ?? new Hero(undefined, '', '', '', '');
    this.visible = true;
  }

  save() {
    if (this.hero.id === undefined) {
      const max =
        this.heroList.reduce((prev, current) =>
          (prev.id ?? 1) > (current.id ?? 1) ? prev : current
        ).id ?? 0;
      this.hero.id = max + 1;

      console.log('new', this.hero);

      this.heroList.push(this.hero);
    } else {
      const index = this.heroList.findIndex((x) => x.id === this.hero.id);

      this.heroList[index] = this.hero;

      console.log('update', this.hero);
    }

    this.visible = false;
  }
}

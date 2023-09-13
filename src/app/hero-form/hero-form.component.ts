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
    console.log('save:', this.hero);
  }
}

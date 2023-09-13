import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  url = 'http://localhost:3000';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(`${this.url}/locations`);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/locations/${id}`);
    console.log(data.json());
    return (await data.json()) ?? {};
  }

  async getAllHeroes(): Promise<Hero[]> {
    const data = await fetch(`${this.url}/heroes`);
    return (await data.json()) ?? [];
  }

  async getHeroesById(id: number): Promise<Hero | undefined> {
    const data = await fetch(`${this.url}/heroes/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}

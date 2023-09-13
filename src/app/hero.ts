interface IHero {
  id: number | undefined;
  name: string;
  description: string;
  power: string;
  alterEgo?: string;
}

export class Hero implements IHero {
  constructor(
    public id: number | undefined,
    public name: string,
    public description: string,
    public power: string,
    public alterEgo?: string
  ) {}
}

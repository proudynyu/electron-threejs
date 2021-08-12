export class Orbit {
  constructor({ planet = undefined }) {
    this.planet = planet;
  }

  getPlanetPosition() {
    return {
      ...this.planet.position,
    };
  }
}

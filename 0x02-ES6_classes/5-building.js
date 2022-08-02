export default class Building {
  constructor() {
    if (this.evacuationWarningMessage === undefined) throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export class GameProblem {
  a: number = 1;
  answer: number = 1;
  constructor() {
    this.reset();
  }
  public reset() {
    this.a = 1 + Math.floor(10 * Math.random());

    this.answer = this.a
  }
}

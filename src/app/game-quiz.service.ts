import { Injectable } from '@angular/core';
import {Grade} from "./grade";
import {GameProblem} from "./game-problem";

@Injectable({
  providedIn: 'root'
})
export class GameQuizService {
  problem: GameProblem;
  userAnswer: string;
  constructor() {
    this.problem = new GameProblem();
    this.userAnswer = '';
  }
  reset() {
    this.problem.reset();
    this.userAnswer = '';
  }
  gradeQuiz(): Grade {
    if (this.userAnswer === '') {
      this.userAnswer = 'empty';
      return Grade.InputError;
    }
    const parsed = parseFloat(this.userAnswer);
    if (isNaN(parsed)) {
      return Grade.InputError;
    }
    if (parsed > 10 || parsed <1) {
      return Grade.InputError;
    }
    if (parsed < this.problem.answer) {
      return Grade.SmallAnswer;
    } if (parsed > this.problem.answer) {
      return Grade.LargeAnswer;
    }
    else  {
      return Grade.RightAnswer;
    }


  }

}



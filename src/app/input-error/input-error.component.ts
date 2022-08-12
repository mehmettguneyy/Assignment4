import { Component } from '@angular/core';
import {GameQuizService} from '../game-quiz.service';
import {GameProblem} from '../game-problem';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.css', '../../assets/css/main.css']
})
export class InputErrorComponent {
  problem: GameProblem;
  userAnswer: string;
  constructor(quiz: GameQuizService) {
    this.problem = quiz.problem;
    this.userAnswer = quiz.userAnswer;
  }
}

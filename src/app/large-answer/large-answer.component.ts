import { Component } from '@angular/core';
import {GameQuizService} from '../game-quiz.service';
import {GameProblem} from '../game-problem';

@Component({
  selector: 'app-large-answer',
  templateUrl: './large-answer.component.html',
  styleUrls: ['./large-answer.component.css', '../../assets/css/main.css']
})
export class LargeAnswerComponent {
  problem: GameProblem;
  userAnswer: string;
  constructor(quiz: GameQuizService) {
    this.problem = quiz.problem;
    this.userAnswer = quiz.userAnswer;
  }
}

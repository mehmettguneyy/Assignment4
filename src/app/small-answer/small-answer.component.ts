import { Component } from '@angular/core';
import {GameQuizService} from '../game-quiz.service';
import {GameProblem} from '../game-problem';

@Component({
  selector: 'app-small-answer',
  templateUrl: './small-answer.component.html',
  styleUrls: ['./small-answer.component.css', '../../assets/css/main.css']
})
export class SmallAnswerComponent {
  problem: GameProblem;
  userAnswer: string;
  constructor(quiz: GameQuizService) {
    this.problem = quiz.problem;
    this.userAnswer = quiz.userAnswer;
  }
}

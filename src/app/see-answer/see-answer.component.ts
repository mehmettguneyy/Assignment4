import { Component } from '@angular/core';
import {GameProblem} from '../game-problem';
import {GameQuizService} from '../game-quiz.service';

@Component({
  selector: 'app-see-answer',
  templateUrl: './see-answer.component.html',
  styleUrls: ['./see-answer.component.css', '../../assets/css/main.css']
})
export class SeeAnswerComponent {
  problem: GameProblem;
  constructor(quiz: GameQuizService) {
    this.problem = quiz.problem;
  }
}

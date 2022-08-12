import {GameProblem} from '../game-problem';
import {GameQuizService} from "../game-quiz.service";
import {Component} from "@angular/core";

@Component({
  selector: 'app-right-answer',
  templateUrl: './right-answer.component.html',
  styleUrls: ['./right-answer.component.css', '../../assets/css/main.css']
})
export class RightAnswerComponent {
  problem: GameProblem;
  userAnswer: string;
  constructor(quiz: GameQuizService) {
    this.problem = quiz.problem;
    this.userAnswer = quiz.userAnswer;
  }
}

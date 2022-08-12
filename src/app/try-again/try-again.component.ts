import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GameProblem} from '../game-problem';
import {GameQuizService} from '../game-quiz.service';
import {navigate} from '../navigate';

@Component({
  selector: 'app-try-again',
  templateUrl: './try-again.component.html',
  styleUrls: ['./try-again.component.css', '../../assets/css/main.css']
})
export class TryAgainComponent {
  problem: GameProblem;
  constructor(
    private quiz: GameQuizService,
    private readonly router: Router) {
    this.problem = quiz.problem;
  }
  public check(userAnswer: string) {
    this.quiz.userAnswer = userAnswer;
    console.log('userAnswer=[' + userAnswer + ']');
    navigate(this.quiz.gradeQuiz(), this.router);
  }
}


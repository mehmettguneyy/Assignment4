import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GameProblem} from '../game-problem';
import {GameQuizService} from '../game-quiz.service';
import {navigate} from '../navigate';

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css', '../../assets/css/main.css']
})
export class NewProblemComponent {
  problem: GameProblem;
  constructor(
    private quiz: GameQuizService,
    private readonly router: Router
  ) {
    this.problem = quiz.problem;
    this.problem.reset();
  }

  public check(userAnswer: string) {
    this.quiz.userAnswer = userAnswer;
    console.log('userAnswer=[' + userAnswer + ']');
    navigate(this.quiz.gradeQuiz(), this.router);
  }
}



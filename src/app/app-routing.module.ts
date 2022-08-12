import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewProblemComponent} from "./new-problem/new-problem.component";
import {RightAnswerComponent} from "./right-answer/right-answer.component";
import {SeeAnswerComponent} from "./see-answer/see-answer.component";
import {InputErrorComponent} from "./input-error/input-error.component";
import {TryAgainComponent} from "./try-again/try-again.component";
import {LargeAnswerComponent} from "./large-answer/large-answer.component";
import {SmallAnswerComponent} from "./small-answer/small-answer.component";

const routes: Routes = [
  {path: 'new-problem', component: NewProblemComponent},
  {path: 'right-answer', component: RightAnswerComponent},
  {path: 'see-answer', component: SeeAnswerComponent},
  {path: 'input-error', component: InputErrorComponent},
  {path: 'try-again', component: TryAgainComponent},
  {path: 'large-answer', component: LargeAnswerComponent},
  {path: 'small-answer', component: SmallAnswerComponent},
  {path: '', redirectTo: 'new-problem', pathMatch: 'full'},
  {path: '**', redirectTo: 'new-problem'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NComponent } from './n/n.component';
import { InputErrorComponent } from './input-error/input-error.component';
import { LargeAnswerComponent } from './large-answer/large-answer.component';
import { NewProblemComponent } from './new-problem/new-problem.component';
import { SeeAnswerComponent } from './see-answer/see-answer.component';
import { SmallAnswerComponent } from './small-answer/small-answer.component';
import { TyAgainComponent } from './ty-again/ty-again.component';
import { TryAgainComponent } from './try-again/try-again.component';
import { RightAnswerComponent } from './right-answer/right-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NComponent,
    InputErrorComponent,
    LargeAnswerComponent,
    NewProblemComponent,
    SeeAnswerComponent,
    SmallAnswerComponent,
    TyAgainComponent,
    TryAgainComponent,
    RightAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

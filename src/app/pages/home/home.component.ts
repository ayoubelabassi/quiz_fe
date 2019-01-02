import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/core/quiz.service';
@Component({
    selector: 'ngx-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  public quizCode:string='';

  constructor(private router: Router, private quizService: QuizService) {

  }

  public startQuiz(): void {
    this.quizService.getQuizByCode(this.quizCode);
      return;
  }

}
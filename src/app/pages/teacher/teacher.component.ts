import { Component } from "@angular/core";
import { QuizService } from "src/app/core/quiz.service";

@Component({
    selector: 'ngx-teacher',
    templateUrl: './teacher.component.html',
})

export class TeacherComponent {

    public quizCode:string='';
    constructor (private quizService: QuizService) {

    }
  
    public startQuiz(): void {
      this.quizService.getQuizByCodeTeacher(this.quizCode);
        return;
    }
}
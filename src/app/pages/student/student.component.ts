import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { QuizService } from "src/app/core/quiz.service";
import { NgxAlertsService } from "src/app/shared/alert/ngx-alerts";

@Component({
    selector: 'ngx-student',
    templateUrl: './student.component.html',
})

export class StudentComponent {
    
    public studentName:string='';
    public quizCode: string='';
    constructor (private router: Router, public quizService: QuizService, private alertService: NgxAlertsService){
        if(!this.quizService.quiz){
            router.navigate(['home']);
        }
    }
    
    public startQuiz(): void {
        this.quizService.saveStudent(this.studentName);
        // this.router.navigate(['passage'])
          return;
      }
}
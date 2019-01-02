import { Component } from "@angular/core";
import { QuizService } from "src/app/core/quiz.service";


@Component({
    selector: 'ngx-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.css']
})


export class ResultsComponent {
    
    constructor(public quizService: QuizService){
        this.refresh();
        setInterval(() => this.refresh(), 10000);
    }

    public refresh(){
        this.quizService.getQuizScoresTeacher(this.quizService.quiz.ID);
    }
}

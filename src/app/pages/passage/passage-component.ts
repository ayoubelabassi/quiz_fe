import { Component } from "@angular/core";
import { QuizService } from "src/app/core/quiz.service";
import { Router } from "@angular/router";


@Component({
    selector: 'ngx-passage',
    templateUrl: './passage.component.html',
    styleUrls: ['./passage.component.css'],
})

export class PassageComponent {

    public isAnswered: boolean = false;
    public timeLeft: number;
    public QUESTIONS: any = [];
    public ANSWERS: any = [];

    public currentQuestion: any = {};

    public currentIndex = 0;

    constructor(public quizService: QuizService, private router: Router) {
        if (!this.quizService.quiz == undefined || !this.quizService.student == undefined) {
            router.navigate(['home']);
        }
        this.QUESTIONS = this.quizService.quiz.QUESTIONS;
        this.start();
        setInterval(() => this.step(), 1000);
    }


    public setQuestion(quest) {
        const question = {
            ID: quest.ID,
            QUESTION: quest.QUESTION,
            ANSWERS: quest.ANSWERS
        };
        this.currentQuestion = question;
        this.timeLeft = 30;
    }


    start() {
        this.setQuestion(this.QUESTIONS[this.currentIndex]);
    }


    next() {
        this.isAnswered=false;
        if (this.currentIndex < this.QUESTIONS.length - 1) {
            this.currentQuestion.ANSWERS.forEach(answer => {
                if(answer.ISTRUE==true && answer.check==true){
                    this.quizService.note+= Math.round((1000 * this.timeLeft)/20);
                }
            });
            this.quizService.saveScore();
            this.currentIndex++;
            this.start();
        }
        else {
            this.router.navigate(['result']);
        }
    }


    public step() {
        if (this.timeLeft == 0) {
            this.next();
        }
        this.timeLeft--;
    }

    onClickAnswer(indexAnswer) {
        if (this.currentQuestion.ANSWERS[indexAnswer].check != undefined && this.currentQuestion.ANSWERS[indexAnswer].check == true) {
            this.currentQuestion.ANSWERS[indexAnswer].check=false;
            this.isAnswered=false;
        }else{
            this.currentQuestion.ANSWERS.forEach(answer => {
                answer.check = false;
            });
            this.currentQuestion.ANSWERS[indexAnswer].check=true;
            this.isAnswered=true;
        }
    }


}
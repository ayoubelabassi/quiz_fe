import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { NgxAlertsService } from "../shared/alert/ngx-alerts";
import { Router } from "@angular/router";

@Injectable()
export class QuizService {
    public api: string = 'quiz';

    public note: number = 0;
    public student: any;
    public quiz: any;
    public score: any;
    public scores: any = [];

    constructor(private http: HttpService<any>, private router: Router,
        private alertService: NgxAlertsService) {

    }


    public getQuizByCode(code) {
        this.http.get(this.api + '/getquiz', { quizCode: code }).subscribe(data => {
            this.quiz = data;
            this.router.navigate(['student']);
        }, error => {
            this.handleError(error);
        })
    }

    public getQuizByCodeTeacher(code) {
        this.http.get(this.api + '/getquiz', { quizCode: code }).subscribe(data => {
            this.quiz = data;
            this.router.navigate(['results']);
        }, error => {
            this.handleError(error);
        })
    }

    public getQuizScoresTeacher(idQuiz) {
        this.http.get(this.api + '/getquizscores', { quizID: idQuiz }).subscribe(data => {
            this.scores = data;
        }, error => {
            this.handleError(error);
        })
    }



    public saveStudent(username: string) {
        this.http.post(this.api + '/saveUser', { NAME: username }).subscribe(data => {
            this.student = data;
            this.router.navigate(['passage']);
        }, error => {
            this.handleError(error);
        })

    }

    public saveScore() {
        const params={
            USER_ID: this.student.ID,
            USER_SCORE: this.note,
            QUIZ_ID: this.quiz.ID,
            SCORE_ID: this.score? this.score.ID : 0,
        };
        this.http.post(this.api + '/saveResult', params).subscribe(data => {
            if(data)
                this.score = data;
        }, error => {
            this.handleError(error);
        })

    }


    private handleError(error) {
        this.alertService.alertError();
        let alert: any = {
            title: 'Notify Title',
            body: 'Notify Body',
        };
        alert.body = 'Un error';
        alert.title = 'Just an Error';
        alert = this.alertService.handleError(error);
        alert.position = 'rightTop';
        this.alertService.alertError(alert);
        this.alertService.notifyError(alert);
    }
}
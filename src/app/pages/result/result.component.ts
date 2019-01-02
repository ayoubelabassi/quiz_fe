import { Component } from "@angular/core";
import { QuizService } from "src/app/core/quiz.service";
import { CurrencyIndex } from "@angular/common/src/i18n/locale_data";


@Component({
    selector: 'ngx-result',
    templateUrl: './result.component.html',
})


export class ResultComponent {
    constructor(public quizService: QuizService){

    }
}

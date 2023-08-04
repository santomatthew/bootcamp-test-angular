import { Component, OnInit } from "@angular/core";
import { QuestionsGetResDto } from "@dto/question/questions-get.res.dto";
import { QuestionService } from "@services/question.service";

@Component({
    selector: 'question-list',
    templateUrl: "./question-list.component.html"
})
export class QuestionListComponent implements OnInit {

    questions!: QuestionsGetResDto[]


    constructor(private questionService: QuestionService) {

    }

    ngOnInit(): void {
        this.getQuestions()
    }

    getQuestions() {
        this.questionService.getQuestions().subscribe(result => {
            this.questions = result
        })
    }

}
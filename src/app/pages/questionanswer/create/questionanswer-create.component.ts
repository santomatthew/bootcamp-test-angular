import { Component, OnInit } from "@angular/core";
import { FormArray, NonNullableFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { QuestionGetResDto } from "@dto/question/question-get.res.dto";
import { QuestionAnswerInsertReqDto } from "@dto/questionanswer/question-answer-insert.req.dto";
import { QuestionService } from "@services/question.service";
import { QuestionAnswerService } from "@services/questionanswer.service";

@Component({
    selector: 'questionanswer-create',
    templateUrl: './questionanswer-create.component.html'
})
export class QuestionAnswerCreateComponent implements OnInit {


    questions!: QuestionGetResDto[]

    questionAnswersInsertReqDto: QuestionAnswerInsertReqDto[] = []

    answerReqDto = this.fb.group({
        data: this.fb.array(this.questionAnswersInsertReqDto)
    })

    constructor(private questionService: QuestionService,
        private fb: NonNullableFormBuilder,
        private questionAnswerService: QuestionAnswerService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.getQuestionsByCandidate()
    }

    get answersReqDto() {
        return this.answerReqDto.get('data') as FormArray
    }

    getQuestionsByCandidate() {
        this.questionService.getQuestionsByCandidate().subscribe(result => {
            this.questions = result

            for (let i = 0; i < this.questions.length; i++) {
                if (this.questions[i].questionOptions != null) {
                    this.answersReqDto.push(this.fb.group({
                        questionId: [this.questions[i].questionId, [Validators.required]],
                        essayAnswer: [null],
                        questionOptionId: [0, [Validators.required]]
                    }))
                }
                else {
                    this.answersReqDto.push(this.fb.group({
                        questionId: [this.questions[i].questionId, [Validators.required]],
                        essayAnswer: ['', [Validators.required]],
                        questionOptionId: [null]
                    }))
                }
            }
        })
    }

    onSubmit() {
        if (this.answerReqDto.valid) {
            const data = this.answerReqDto.getRawValue().data
            this.questionAnswerService.insertQuestionAnswer(data).subscribe(result => {
                console.log(result);
                localStorage.clear()
                this.router.navigateByUrl("login")
            })
        }
        else {
            console.log("insert answer invalid");
        }
    }
}
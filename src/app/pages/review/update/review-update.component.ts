import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AnswerGetResDto } from "@dto/questionanswer/answer-get.res.dto";
import { ReviewDetailUpdateReqDto } from "@dto/reviewdetail/review-detail-update.req.dto";
import { ReviewStatusGetResDto } from "@dto/reviewstatus/review-status-get.res.dto";
import { QuestionAnswerService } from "@services/questionanswer.service";
import { ReviewDetailService } from "@services/reviewdetail.service";
import { ReviewStatusService } from "@services/reviewstatus.service";

@Component({
    selector: 'review-update',
    templateUrl: './review-update.component.html'
})
export class ReviewUpdateComponent implements OnInit, AfterViewChecked {

    answers: AnswerGetResDto[] = []
    reviewStatus: ReviewStatusGetResDto[] = []

    reviewUpdateDto!: ReviewDetailUpdateReqDto

    updateReviewDto = this.fb.group({
        candidateId: [0, [Validators.required]],
        grade: [0, [Validators.required]],
        notes: ['', [Validators.required]],
        reviewStatusId: [0, [Validators.required]],
    })


    constructor(private activated: ActivatedRoute,
        private answerService: QuestionAnswerService,
        private reviewStatusService: ReviewStatusService,
        private reviewDetailService: ReviewDetailService,
        private router: Router,
        private fb: NonNullableFormBuilder,
        private cd: ChangeDetectorRef) {

    }

    ngOnInit(): void {
        this.getDetails()
        this.getReviewStatus()
    }


    ngAfterViewChecked(): void {
        this.cd.detectChanges()
    }

    getDetails() {
        this.activated.params.subscribe(result => {
            const id = result["id"]
            this.answerService.getAnswersByCandidateId(id).subscribe(result => {
                this.answers = result

            })
            this.updateReviewDto = this.fb.group({
                candidateId: [id, [Validators.required]],
                grade: [0, [Validators.required]],
                notes: ['', [Validators.required]],
                reviewStatusId: [0, [Validators.required]],
            })
        })
    }

    getReviewStatus() {
        this.reviewStatusService.getReviewStatus().subscribe(result => {
            this.reviewStatus = result
        })
    }

    onSubmit() {
        if (this.updateReviewDto.valid) {
            const data = this.updateReviewDto.getRawValue()
            this.reviewDetailService.updateReviewDetail(data).subscribe(result => {
                this.router.navigateByUrl("reviews")
            })
        }
        else {
            console.log("Update Review invalid");
        }
    }

}
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CandidateAssignGetResDto } from "@dto/candidateassign/candidate-assign-get.res.dto";
import { CandidateAssignService } from "@services/candidateassign.service";
import { ReviewService } from "@services/review.service";

@Component({
    selector: "pre-questionanswer",
    templateUrl: "./pre-questionanswer.component.html"
})
export class PreQuestionAnswerComponent implements OnInit {


    candidateAssignDto!: CandidateAssignGetResDto
    questionTotal!: number
    startTime!: string
    endTime!: string

    constructor(private candidateAssignService: CandidateAssignService,
        private reviewService: ReviewService,
        private router: Router) {

    }


    ngOnInit(): void {
        this.getCandidateAssign();
    }

    getCandidateAssign() {
        this.candidateAssignService.getCandidateAssign().subscribe(result => {
            this.candidateAssignDto = result
            this.questionTotal = result.questionTotal
            this.startTime = result.startTime
            this.endTime = result.endTime
        })
    }


    updateProgressStatusAndStart() {
        this.reviewService.updateReviewStatus().subscribe(result => {
            this.router.navigateByUrl('/questionanswers/create')
        })
    }



}
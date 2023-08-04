import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ReviewsGetResDto } from "@dto/review/reviews-get.res.dto";
import { ReviewDetailGetResDto } from "@dto/reviewdetail/review-detail-get.res.dto";
import { ReviewService } from "@services/review.service";
import { ReviewDetailService } from "@services/reviewdetail.service";

@Component({
    selector: 'review-list',
    templateUrl: './review-list.component.html'
})
export class ReviewListComponent implements OnInit {
    visible: boolean = false;


    reviews!: ReviewsGetResDto[]
    reviewDetails!: ReviewDetailGetResDto[]

    constructor(private reviewService: ReviewService,
        private reviewDetailService: ReviewDetailService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.getReviews()
    }

    getReviews() {
        this.reviewService.getReviewWithPrincipal().subscribe(result => {
            this.reviews = result
        })
    }

    review(id: number) {
        this.router.navigateByUrl(`reviews/update/${id}`)
    }


    getScore(id: number) {
        this.reviewDetailService.getReviewDetail(id).subscribe(result => {
            this.reviewDetails = result
            this.visible = true;
        })
    }

}
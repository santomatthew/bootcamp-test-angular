import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { ReviewDetailGetResDto } from "../dto/reviewdetail/review-detail-get.res.dto";
import { BASE_URL } from "../constant/api.constant";
import { ReviewUpdateReqDto } from "../dto/review/review-update.req.dto";
import { UpdateResDto } from "../dto/update.res.dto";

@Injectable({
    providedIn: 'root'
})

export class ReviewDetailService {

    constructor(private base: BaseService) {

    }

    getReviewDetail(reviewId: number): Observable<ReviewDetailGetResDto[]> {
        return this.base.get<ReviewDetailGetResDto[]>(`${BASE_URL}/review-details?reviewId=${reviewId}`)
    }

    updateReviewDetail(data: ReviewUpdateReqDto): Observable<UpdateResDto> {
        return this.base.patch<UpdateResDto>(`${BASE_URL}/review-details`, data)
    }
}
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { ReviewsGetResDto } from "../dto/review/reviews-get.res.dto";
import { BASE_URL } from "../constant/api.constant";

@Injectable({
    providedIn: 'root'
})
export class ReviewService {

    constructor(private base: BaseService) {

    }

    getReviewWithPrincipal(): Observable<ReviewsGetResDto[]> {
        return this.base.get<ReviewsGetResDto[]>(`${BASE_URL}/reviews`)

    }

}
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/api.constant";
import { ReviewStatusGetResDto } from "../dto/reviewstatus/review-status-get.res.dto";

@Injectable({
    providedIn: 'root'
})
export class ReviewStatusService {

    constructor(private base: BaseService) {

    }

    getReviewStatus(): Observable<ReviewStatusGetResDto[]> {
        return this.base.get<ReviewStatusGetResDto[]>(`${BASE_URL}/review-status`)
    }

}
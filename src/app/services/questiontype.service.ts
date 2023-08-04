import { Observable } from "rxjs";
import { BaseService } from "./base.service";
import { QuestionTypeGetResDto } from "../dto/questiontype/question-type-get.res.dto";
import { BASE_URL } from "../constant/api.constant";
import { Injectable } from "@angular/core";

@Injectable({

    providedIn: 'root'
})
export class QuestionTypeService {

    constructor(private base: BaseService) {

    }

    getQuestionTypes(): Observable<QuestionTypeGetResDto[]> {
        return this.base.get<QuestionTypeGetResDto[]>(`${BASE_URL}/question-types`)
    }

}
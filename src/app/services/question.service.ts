import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { QuestionsGetResDto } from "../dto/question/questions-get.res.dto";
import { BASE_URL } from "../constant/api.constant";
import { QuestionInsertReqDto } from "../dto/question/question-insert.req.dto";
import { InsertResDto } from "../dto/insert.res.dto";
import { QuestionGetResDto } from "../dto/question/question-get.res.dto";

@Injectable({
    providedIn: 'root'
})
export class QuestionService {


    constructor(private base: BaseService) {

    }

    getQuestions(): Observable<QuestionsGetResDto[]> {
        return this.base.get<QuestionsGetResDto[]>(`${BASE_URL}/questions/all`)
    }

    createQuestions(data: QuestionInsertReqDto[]): Observable<InsertResDto> {
        return this.base.post<InsertResDto>(`${BASE_URL}/questions`, data)
    }

    getQuestionsByCandidate(): Observable<QuestionGetResDto[]> {
        return this.base.get<QuestionGetResDto[]>(`${BASE_URL}/questions`)
    }

}
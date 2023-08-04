import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { QuestionAnswerInsertReqDto } from "../dto/questionanswer/question-answer-insert.req.dto";
import { Observable } from "rxjs";
import { InsertResDto } from "../dto/insert.res.dto";
import { BASE_URL } from "../constant/api.constant";
import { AnswerGetResDto } from "../dto/questionanswer/answer-get.res.dto";

@Injectable({
    providedIn: 'root'
})

export class QuestionAnswerService {


    constructor(private base: BaseService) {

    }


    insertQuestionAnswer(data: QuestionAnswerInsertReqDto[]): Observable<InsertResDto> {
        return this.base.post<InsertResDto>(`${BASE_URL}/question-answers`, data)
    }

    getAnswersByCandidateId(candidateId: number): Observable<AnswerGetResDto[]> {
        return this.base.get<AnswerGetResDto[]>(`${BASE_URL}/question-answers?candidateId=${candidateId}`)
    }


}
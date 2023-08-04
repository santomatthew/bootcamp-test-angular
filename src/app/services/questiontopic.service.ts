import { Observable } from "rxjs";
import { BaseService } from "./base.service";
import { QuestionTopicGetResDto } from "../dto/questiontopic/question-topic-get.res.dto";
import { BASE_URL } from "../constant/api.constant";
import { Injectable } from "@angular/core";
import { QuestionTopicInsertReqDto } from "../dto/questiontopic/question-topic-insert.req.dto";
import { InsertResDto } from "../dto/insert.res.dto";

@Injectable({

    providedIn: 'root'
})
export class QuestionTopicService {

    constructor(private base: BaseService) { }


    getTopics(): Observable<QuestionTopicGetResDto[]> {
        return this.base.get<QuestionTopicGetResDto[]>(`${BASE_URL}/question-topics`)
    }


    createTopic(data: QuestionTopicInsertReqDto): Observable<InsertResDto> {
        return this.base.post<InsertResDto>(`${BASE_URL}/question-topics`, data)
    }

}
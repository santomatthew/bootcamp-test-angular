import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { CandidateAssignInsertReqDto } from "../dto/candidateassign/candidate-assign-insert.req.dto";
import { Observable } from "rxjs";
import { InsertResDto } from "../dto/insert.res.dto";
import { BASE_URL } from "../constant/api.constant";
import { CandidateAssignsInsertReqDto } from "../dto/candidateassign/candidate-assigns-insert.req.dto";
import { CandidateAssignGetResDto } from "@dto/candidateassign/candidate-assign-get.res.dto";

@Injectable({

    providedIn: 'root'
})
export class CandidateAssignService {


    constructor(private base: BaseService) {

    }

    createCandidateAssign(data: CandidateAssignsInsertReqDto): Observable<InsertResDto> {
        return this.base.post<InsertResDto>(`${BASE_URL}/candidate-assigns`, data)
    }

    getCandidateAssign(): Observable<CandidateAssignGetResDto> {
        return this.base.get<CandidateAssignGetResDto>(`${BASE_URL}/candidate-assigns/all`)
    }


}
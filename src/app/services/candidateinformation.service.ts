import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { CandidateInformationInsertReqDto } from "../dto/candidateinformation/candidate-information-insert.req.dto";
import { Observable } from "rxjs";
import { InsertResDto } from "../dto/insert.res.dto";
import { BASE_URL } from "../constant/api.constant";

@Injectable({
    providedIn: 'root'
})
export class CandidateInformationService {


    constructor(private base: BaseService) {

    }


    insertCandidateInformation(data: CandidateInformationInsertReqDto[]): Observable<InsertResDto> {
        return this.base.post<InsertResDto>(`${BASE_URL}/candidate-informations`, data)

    }

}
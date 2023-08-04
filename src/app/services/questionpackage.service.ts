import { Observable } from "rxjs";
import { BaseService } from "./base.service";
import { QuestionPackageGetResDto } from "../dto/questionpackage/question-package-get.res.dto";
import { BASE_URL } from "../constant/api.constant";
import { Injectable } from "@angular/core";
import { QuestionPackageInsertReqDto } from "../dto/questionpackage/question-package-insert.req.dto";
import { InsertResDto } from "../dto/insert.res.dto";

@Injectable({

    providedIn: 'root'
})
export class QuestionPackageService {

    constructor(private base: BaseService) {

    }

    getPackage(): Observable<QuestionPackageGetResDto[]> {
        return this.base.get<QuestionPackageGetResDto[]>(`${BASE_URL}/question-packages`)
    }

    createPackage(data: QuestionPackageInsertReqDto): Observable<InsertResDto> {
        return this.base.post<InsertResDto>(`${BASE_URL}/question-packages`, data)
    }

}
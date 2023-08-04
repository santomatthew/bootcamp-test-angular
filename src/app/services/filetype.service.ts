import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { FileTypeGetResDto } from "../dto/filetype/file-type-get.res.dto";
import { BASE_URL } from "../constant/api.constant";

@Injectable({
    providedIn: 'root'
})
export class FileTypeService {

    constructor(private base: BaseService) {

    }

    getFileTypes(): Observable<FileTypeGetResDto[]> {
        return this.base.get<FileTypeGetResDto[]>(`${BASE_URL}/file-types`)

    }

}
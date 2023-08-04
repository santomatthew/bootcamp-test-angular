import { Observable } from "rxjs";
import { BaseService } from "./base.service";
import { RoleGetResDto } from "../dto/role/role-get.res.dto";
import { BASE_URL } from "../constant/api.constant";
import { UserInsertReqDto } from "../dto/user/user-insert.req.dto";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RoleService {

    constructor(private base: BaseService) {

    }

    getRoles(): Observable<RoleGetResDto[]> {
        return this.base.get<RoleGetResDto[]>(`${BASE_URL}/roles`)

    }

    getRole(roleCode: string): Observable<RoleGetResDto> {
        return this.base.get<RoleGetResDto>(`${BASE_URL}/roles/code`,)
    }


}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsersResDto } from "../dto/user/users-res.dto";
import { BaseService } from "./base.service";
import { UserInsertReqDto } from "../dto/user/user-insert.req.dto";
import { InsertResDto } from "../dto/insert.res.dto";
import { BASE_URL } from "../constant/api.constant";
import { ProfileGetResDto } from "../dto/profile/profile-get.res.dto";
import { UserPasswordUpdateReqDto } from "../dto/user/user-password-update.req.dto";
import { UpdateResDto } from "../dto/update.res.dto";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private base: BaseService) { }

    getUsers(): Observable<UsersResDto[]> {
        return this.base.get<UsersResDto[]>(`${BASE_URL}/users`)
    }

    createUser(data: UserInsertReqDto): Observable<InsertResDto> {
        return this.base.post<InsertResDto>(`${BASE_URL}/users`, data)
    }

    getUsersByRoleCode(roleCode: String): Observable<UsersResDto[]> {
        return this.base.get<UsersResDto[]>(`${BASE_URL}/users/code/?code=${roleCode}`)
    }

    getProfile(): Observable<ProfileGetResDto> {
        return this.base.get<ProfileGetResDto>(`${BASE_URL}/users/profile`)
    }

    changePassword(data: UserPasswordUpdateReqDto): Observable<UpdateResDto> {
        return this.base.patch<UpdateResDto>(`${BASE_URL}/users`, data)
    }

}
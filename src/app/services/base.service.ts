import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators"
import { AuthService } from "./auth.service";
import { ToastrService } from "ngx-toastr"
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    constructor(private http: HttpClient,
        private authService: AuthService,
        private toast: ToastrService,
        private router: Router) { }


    private get token(): string | null {
        const profile = this.authService.getProfile()
        if (profile && profile.token) {
            return profile.token
        }
        return null
    }

    private get header() {
        return {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        }
    }

    post<T>(url: string, body: any, withToken = true): Observable<T> {
        // this.toast.success('test')
        return this.http.post<T>(url, body, (withToken ? this.header : undefined))
            .pipe(response(this.toast, this.router))

    }

    get<T>(url: string, withToken = true): Observable<T> {
        return this.http.get<T>(url, (withToken ? this.header : undefined))
            .pipe(response(this.toast, this.router))
    }

    patch<T>(url: string, body: any, withToken = true): Observable<T> {
        return this.http.patch<T>(url, body, (withToken ? this.header : undefined))
            .pipe(response(this.toast, this.router))
    }
}


function response<T>(toast: ToastrService,
    router: Router) {
    return tap<T>({
        next: (data) => {
            console.log(data);
            if (data && (data as any).message) {
                toast.success((data as any).message)
            }


        },
        error: (err) => {
            if (err instanceof HttpErrorResponse) {
                console.log(err.error);
                if (err && err.error && err.error.message) {
                    toast.error(err.error.message)
                    console.log(err.status);
                    if (err.status === 401 && err.error.message === 'token expired') {
                        localStorage.clear()
                        router.navigateByUrl('/login')
                    }
                }


            }
        }
    })
}


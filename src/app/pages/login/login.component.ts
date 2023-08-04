import { Component } from "@angular/core";
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { LoginService } from "@services/login.service";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {


    loading = false;
    userLoginReqDto = this.fb.group({
        userEmail: ['', [Validators.required]],
        userPassword: ['', [Validators.required]]
    })

    constructor(
        private loginService: LoginService,
        private fb: NonNullableFormBuilder,
        private router: Router,
        private title: Title) {
        this.title.setTitle('Dashboard | Bootest Santo')
    }

    onLogin() {
        if (this.userLoginReqDto.valid) {
            const data = this.userLoginReqDto.getRawValue()
            this.loading = true
            this.loginService.login(data).subscribe({
                next: (result) => {
                    this.loading = false
                    localStorage.setItem('data', JSON.stringify(result))
                    this.router.navigateByUrl("/dashboard")
                }
                ,
                error: () => {
                    this.loading = false
                }
            })


        }
        else {
            console.log('invalid onlogin');
        }
    }


}
import { Component } from "@angular/core";
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "@services/user.service";

@Component({
    selector: 'user-changepassword',
    templateUrl: "./user-changepassword.component.html"
})
export class UserChangePassword {



    constructor(private userService: UserService,
        private fb: NonNullableFormBuilder,
        private router: Router) {

    }


    updatePasswordReqDto = this.fb.group({
        oldPassword: ['', Validators.required],
        newPassword: ['', Validators.required]
    })

    onSubmit() {
        if (this.updatePasswordReqDto.valid) {
            const data = this.updatePasswordReqDto.getRawValue()
            this.userService.changePassword(data).subscribe(result => {
                if (result.message != "Berhasil update password") {
                    console.log("Password lama salah");
                }

                else {
                    this.router.navigateByUrl('/login')
                    localStorage.clear()
                }

            })
        }
        else {
            console.log("Change Password Invalid");
        }
    }

}
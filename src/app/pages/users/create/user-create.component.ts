import { Component, OnInit } from "@angular/core";
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RoleGetResDto } from "@dto/role/role-get.res.dto";
import { AuthService } from "@services/auth.service";
import { FileService } from "@services/file.service";
import { RoleService } from "@services/role.service";
import { UserService } from "@services/user.service";
import { FileUpload } from "primeng/fileupload";
import { UserRole } from "src/app/constant/role.constant";

@Component({
    selector: 'user-create',
    templateUrl: './user-create.component.html'

})
export class UserCreateComponent implements OnInit {

    roles: RoleGetResDto[] = []
    roleCode!: string

    userInsertReqDto = this.fb.group({
        userEmail: ['', [Validators.required]],
        roleCode: ['', [Validators.required]],
        fullName: ['', [Validators.required]],
        address: ['', [Validators.required]],
        phoneNo: ['', [Validators.required]],
        ext: [''],
        fileName: ['']
    })


    constructor(private roleService: RoleService,
        private fb: NonNullableFormBuilder,
        private userService: UserService,
        private router: Router,
        private fileService: FileService,
        private authService: AuthService) {

    }

    ngOnInit(): void {
        const profile = this.authService.getProfile()
        if (profile) {
            this.roleCode = profile.roleCode
        }
        this.getRoles()

    }

    getRoles() {

        if (this.roleCode == UserRole.SUPERADMIN) {
            this.roleService.getRoles().subscribe(result => {
                this.roles = result
            })
        }
        else if (this.roleCode == UserRole.HUMANRESOURCE) {
            this.roleService.getRole().subscribe(result => {
                this.roles.push(result)
            })
        }


    }



    fileUpload(event: any, fileUpload: FileUpload) {
        const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (typeof reader.result === "string") resolve(reader.result)
            };
            reader.onerror = error => reject(error);
        });

        for (let file of event.files) {
            toBase64(file).then(result => {
                const resultBase64 = result.substring(result.indexOf(",") + 1, result.length)
                const resultExtension = file.name.substring(file.name.indexOf(".") + 1, file.name.length)

                this.userInsertReqDto.patchValue({
                    ext: resultExtension,
                    fileName: resultBase64
                })
                fileUpload.clear();
            })
        }
    }

    onSubmit() {
        if (this.userInsertReqDto.valid) {
            const data = this.userInsertReqDto.getRawValue()
            this.userService.createUser(data).subscribe((result) => {
                console.log(result);
                this.router.navigateByUrl("/users")
            })
        }
        else {
            console.log("invalid submit");
        }

    }
}
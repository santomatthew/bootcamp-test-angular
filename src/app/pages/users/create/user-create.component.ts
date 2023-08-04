import { Component, OnInit } from "@angular/core";
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RoleGetResDto } from "@dto/role/role-get.res.dto";
import { FileService } from "@services/file.service";
import { RoleService } from "@services/role.service";
import { UserService } from "@services/user.service";

@Component({
    selector: 'user-create',
    templateUrl: './user-create.component.html'

})
export class UserCreateComponent implements OnInit {

    roles!: RoleGetResDto[]

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
        private fileService: FileService) {

    }

    ngOnInit(): void {
        this.getRoles()
    }

    getRoles() {
        this.roleService.getRoles().subscribe(result => {
            this.roles = result
        })
    }

    onUpload(event: any) {
        this.fileService.fileUpload(event, (ext, fileName) => {
            this.userInsertReqDto.patchValue({
                ext,
                fileName
            })
        })
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
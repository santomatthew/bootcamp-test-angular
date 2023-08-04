import { Component, OnInit } from "@angular/core";
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { ProfileGetResDto } from "@dto/profile/profile-get.res.dto";
import { UserService } from "@services/user.service";
import { FileService } from "@services/file.service";
import { FileUpload } from "primeng/fileupload";

@Component({
    selector: 'user-profile',
    templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

    profile!: ProfileGetResDto

    updateProfileDto = this.fb.group({
        fullName: ['', [Validators.required]],
        address: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        fileName: [''],
        ext: ['']
    })

    constructor(private userService: UserService,
        private fb: NonNullableFormBuilder,
        private fileService: FileService) {

    }

    ngOnInit(): void {
        this.getProfile()
    }

    onUpload(event: any) {
        this.fileService.fileUpload(event, (ext, fileName) => {
            this.updateProfileDto.patchValue({
                ext,
                fileName
            })
        })
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

                this.updateProfileDto.patchValue({
                    fileName: resultBase64,
                    ext: resultExtension
                })

                // this.companyUpdateReqDto.patchValue({
                //     fileName: resultBase64,
                //     fileExt: resultExtension
                // })
                fileUpload.clear();
            })
        }
    }

    getProfile() {
        this.userService.getProfile().subscribe(result => {
            this.profile = result
        })
    }
}
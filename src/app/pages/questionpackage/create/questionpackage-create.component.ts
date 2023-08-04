import { Component } from "@angular/core";
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { QuestionPackageService } from "@services/questionpackage.service";

@Component({
    selector: 'questionpackage-create',
    templateUrl: './questionpackage-create.component.html'
})
export class QuestionPackageCreateComponent {


    questionPackageInsertReqDto = this.fb.group({
        packageCode: ['', [Validators.required]],
        packageName: ['', [Validators.required]]
    })

    constructor(private router: Router, private packageService: QuestionPackageService,
        private fb: NonNullableFormBuilder) {

    }


    onSubmit() {
        if (this.questionPackageInsertReqDto.valid) {
            const data = this.questionPackageInsertReqDto.getRawValue()
            this.packageService.createPackage(data).subscribe(result => {
                console.log(result);
                this.router.navigateByUrl("/questionpackages")
            })
        }
    }

}
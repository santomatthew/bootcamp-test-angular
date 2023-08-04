import { Component, OnInit } from "@angular/core";
import { QuestionPackageGetResDto } from "@dto/questionpackage/question-package-get.res.dto";
import { QuestionPackageService } from "@services/questionpackage.service";

@Component({
    selector: 'questionpackage-list',
    templateUrl: './questionpackage-list.component.html'
})
export class QuestionPackageListComponent implements OnInit {

    packages!: QuestionPackageGetResDto[]


    constructor(private packageService: QuestionPackageService) {

    }

    ngOnInit(): void {
        this.getPackages()
    }

    getPackages() {
        this.packageService.getPackage().subscribe(result => {
            this.packages = result
        })
    }


}
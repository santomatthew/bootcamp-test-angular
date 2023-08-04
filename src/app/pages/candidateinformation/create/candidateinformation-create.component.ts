import { Component, OnInit } from "@angular/core";
import { FormArray, NonNullableFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CandidateInformationInsertReqDto } from "@dto/candidateinformation/candidate-information-insert.req.dto";
import { FileTypeGetResDto } from "@dto/filetype/file-type-get.res.dto";
import { CandidateInformationService } from "@services/candidateinformation.service";
import { FileService } from "@services/file.service";
import { FileTypeService } from "@services/filetype.service";

@Component({
    selector: 'candidate-information',
    templateUrl: './candidateinformation-create.component.html'
})
export class CandidateInformationCreateComponent implements OnInit {

    fileTypes!: FileTypeGetResDto[]


    candidateInformationInsertDto: CandidateInformationInsertReqDto[] = []


    candidateInformationsReqDto = this.fb.group({
        data: this.fb.array(
            this.candidateInformationInsertDto)
    })



    constructor(private fileTypeService: FileTypeService,
        private fileService: FileService,
        private fb: NonNullableFormBuilder,
        private candidateInformationService: CandidateInformationService,
        private router: Router) {

    }

    ngOnInit(): void {
        this.getFileTypes()

    }

    get candidateInformations() {
        return this.candidateInformationsReqDto.get('data') as FormArray
    }

    fileUpload(event: any, id: number, index: number) {
        this.fileService.fileUpload(event, (ext, fileName) => {
            this.candidateInformations.at(index).setValue({
                fileTypeId: id,
                ext,
                fileName
            })
        })
    }

    getFileTypes() {
        this.fileTypeService.getFileTypes().subscribe(result => {
            this.fileTypes = result
            for (let i = 0; i < this.fileTypes.length; i++) {
                this.candidateInformations.push(this.fb.group({
                    fileTypeId: [0, [Validators.required]],
                    ext: ['', [Validators.required]],
                    fileName: ['', [Validators.required]]
                }))
            }
        })
    }

    onSubmit() {
        if (this.candidateInformations.valid) {
            const data = this.candidateInformationsReqDto.getRawValue().data
            this.candidateInformationService.insertCandidateInformation(data).subscribe(result => {
                console.log(result);
                this.router.navigateByUrl('/questionanswers')
            })
        }
        else {
            console.log("Invalid submit candidate infromations");
        }

    }
}
import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormArray, NonNullableFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CandidateAssignInsertReqDto } from "@dto/candidateassign/candidate-assign-insert.req.dto";
import { QuestionsGetResDto } from "@dto/question/questions-get.res.dto";
import { QuestionPackageGetResDto } from "@dto/questionpackage/question-package-get.res.dto";
import { QuestionTopicGetResDto } from "@dto/questiontopic/question-topic-get.res.dto";
import { QuestionTypeGetResDto } from "@dto/questiontype/question-type-get.res.dto";
import { UsersResDto } from "@dto/user/users-res.dto";
import { CandidateAssignService } from "@services/candidateassign.service";
import { QuestionService } from "@services/question.service";
import { QuestionPackageService } from "@services/questionpackage.service";
import { QuestionTopicService } from "@services/questiontopic.service";
import { QuestionTypeService } from "@services/questiontype.service";
import { UserService } from "@services/user.service";
import { convertUTCToLocalDateTime } from "src/app/util/convert-date.util";

@Component({
    selector: 'candidateassign-create',
    templateUrl: './candidateassign-create.component.html'
})

export class CandidateAssignCreateComponent implements OnInit, AfterViewChecked {

    candidates!: UsersResDto[]
    reviewers!: UsersResDto[]
    packages!: QuestionPackageGetResDto[]
    topics!: QuestionTopicGetResDto[]
    types!: QuestionTypeGetResDto[]
    questions!: QuestionsGetResDto[]

    questionIdDto: number[] = []
    candidateAssignReqDto: CandidateAssignInsertReqDto[] = []

    typesSelected: number[] = []


    candidateAssignsDto = this.fb.group({
        candidateAssigns: this.fb.array(this.candidateAssignReqDto),
        candidateId: [0, [Validators.required]],
        reviewerId: [0, [Validators.required]],
        packageId: [0, [Validators.required]],
        topicId: [0, [Validators.required]],
        questionTypeId: [0, [Validators.required]],
        questionId: this.fb.array(this.questionIdDto)
    })

    constructor(private topicService: QuestionTopicService,
        private packageService: QuestionPackageService,
        private questionService: QuestionService,
        private questionTypeService: QuestionTypeService,
        private userService: UserService,
        private fb: NonNullableFormBuilder,
        private candidateAssignService: CandidateAssignService,
        private router: Router,
        private cd: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.getCandidates()
        this.getReviewers()
        this.getPackages()
        this.getTopics()
        this.getQuestionType()
        this.getQuestions()
    }
    ngAfterViewChecked(): void {
        this.cd.detectChanges()
    }

    getCandidates() {
        this.userService.getUsersByRoleCode("CDT").subscribe(result => {
            this.candidates = result
        })
    }

    getReviewers() {
        this.userService.getUsersByRoleCode("REV").subscribe(result => {
            this.reviewers = result
        })
    }

    getPackages() {
        this.packageService.getPackage().subscribe(result => {
            this.packages = result
        })
    }

    getTopics() {
        this.topicService.getTopics().subscribe(result => {
            this.topics = result
        })
    }

    getQuestionType() {
        this.questionTypeService.getQuestionTypes().subscribe(result => {
            this.types = result
        })
    }

    getQuestions() {
        this.questionService.getQuestions().subscribe(result => {
            this.questions = result
        })
    }

    get candidateAssigns() {
        return this.candidateAssignsDto.get('candidateAssigns') as FormArray
    }

    get questionId() {
        return this.candidateAssignsDto.get('questionId') as FormArray
    }

    onAdd() {
        this.questionId.push(this.fb.control(0))
    }

    addQuestionType(questionTypeId: number) {
        let indexFound: number = -1

        for (let i = 0; i < this.typesSelected.length; i++) {
            if (this.typesSelected[i] === questionTypeId) {
                indexFound = i
            }
        }

        if (indexFound != -1) {
            this.candidateAssigns.removeAt(indexFound)
            this.typesSelected.splice(indexFound, 1)
        } else {
            this.candidateAssigns.push(this.fb.group({
                questionTypeId: [questionTypeId, [Validators.required]],
                startTime: ['', [Validators.required]],
                endTime: ['', [Validators.required]],
                startTimeHelper: ['', [Validators.required]],
                endTimeHelper: ['', [Validators.required]],
            }))
            this.typesSelected.push(questionTypeId)
        }
        this.onRefresh()
    }

    convertStartDate(event: any, index: number) {
        this.candidateAssigns.at(index).patchValue({
            startTime: convertUTCToLocalDateTime(event)
        })
    }


    convertEndDate(event: any, index: number) {
        this.candidateAssigns.at(index).patchValue({
            endTime: convertUTCToLocalDateTime(event)
        })
    }

    onRefresh() {
        const data = this.candidateAssignsDto.getRawValue()
        if (data.packageId != 0 && data.topicId != 0 && data.packageId != null
            && data.topicId != null && this.typesSelected.length != 0) {
            if (this.typesSelected.length > 1) {
                const filter = {
                    packageId: data.packageId,
                    topicId: data.topicId
                }
                this.questionService.getQuestionsFilteredAllTypes(filter).subscribe(result => {
                    this.questions = result
                })
            }

            if (this.typesSelected.length == 1) {
                const filter = {
                    packageId: data.packageId,
                    topicId: data.topicId,
                    questionTypeId: data.questionTypeId
                }
                this.questionService.getQuestionsFilteredByType(filter).subscribe(result => {
                    this.questions = result
                })
            }
        }
    }




    remove(i: number) {
        this.questionId.removeAt(i)
    }

    onSubmit() {
        if (this.candidateAssignsDto.valid && this.questionId.length > 0) {
            const data = this.candidateAssignsDto.getRawValue()
            this.candidateAssignService.createCandidateAssign(data).subscribe(result => {
                console.log(result);
                this.router.navigateByUrl('/dashboard')
            })
        }
        else {
            console.log("invalid candidate assign");
        }

    }
}


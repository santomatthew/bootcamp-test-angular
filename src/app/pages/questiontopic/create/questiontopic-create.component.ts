import { Component, OnInit } from "@angular/core"
import { NonNullableFormBuilder, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { QuestionTopicService } from "@services/questiontopic.service"

@Component({
    selector: 'questiontopic-create',
    templateUrl: './questiontopic-create.component.html'
})
export class QuestionTopicCreateComponent {



    topicInsertReqDto = this.fb.group({
        topicCode: ['', [Validators.required]],
        questionTopic: ['', [Validators.required]]
    })

    constructor(private topicService: QuestionTopicService, private router: Router, private fb: NonNullableFormBuilder) {

    }



    onSubmit() {
        if (this.topicInsertReqDto.valid) {

            const data = this.topicInsertReqDto.getRawValue()
            this.topicService.createTopic(data).subscribe(result => {
                console.log(result);
                this.router.navigateByUrl('/questiontopics')
            })

        }
        else {
            console.log("Invalid submit topic");
        }
    }

}
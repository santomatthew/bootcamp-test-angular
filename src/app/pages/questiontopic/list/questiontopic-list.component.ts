import { Component, OnInit } from "@angular/core";
import { QuestionTopicGetResDto } from "@dto/questiontopic/question-topic-get.res.dto";
import { QuestionTopicService } from "@services/questiontopic.service";

@Component({
    selector: 'questiontopic-list',
    templateUrl: './questiontopic-list.component.html'
})
export class QuestionTopicListComponent implements OnInit {

    topics!: QuestionTopicGetResDto[]

    constructor(private topicService: QuestionTopicService) {

    }


    ngOnInit(): void {
        this.getTopics()
    }

    getTopics() {
        this.topicService.getTopics().subscribe(result => {
            this.topics = result
        })
    }

}
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuestionTopicListComponent } from "./list/questiontopic-list.component";
import { QuestionTopicCreateComponent } from "./create/questiontopic-create.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/component/shared/shared.module";
const routes: Routes = [
    {
        path: '',
        component: QuestionTopicListComponent
    },
    {
        path: 'create',
        component: QuestionTopicCreateComponent
    }
]

@NgModule({
    declarations: [
        QuestionTopicListComponent,
        QuestionTopicCreateComponent
    ]
    ,
    imports: [
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        CommonModule,
        SharedModule

    ],
    exports: [
        RouterModule,
        QuestionTopicListComponent,
        QuestionTopicCreateComponent

    ]
})
export class QuestionTopicRouting {

}
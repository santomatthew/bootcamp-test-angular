import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PreQuestionAnswerComponent } from "./pre/pre-questionanswer.component";
import { QuestionAnswerCreateComponent } from "./create/questionanswer-create.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/component/shared/shared.module";
import { ButtonCommponent } from "src/app/component/button/button.component";
const routes: Routes = [
    {
        path: '',
        component: PreQuestionAnswerComponent
    },
    {
        path: 'create',
        component: QuestionAnswerCreateComponent
    }
]

@NgModule({
    declarations: [
        PreQuestionAnswerComponent,
        QuestionAnswerCreateComponent
    ]
    ,
    imports: [
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        ButtonCommponent
    ],
    exports: [
        RouterModule,
        PreQuestionAnswerComponent,
        QuestionAnswerCreateComponent
    ]
})
export class QuestionAnswerRouting {

}
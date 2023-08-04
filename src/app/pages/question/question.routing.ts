import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuestionCreateComponent } from "./create/question-create.component";
import { QuestionListComponent } from "./list/question-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/component/shared/shared.module";
import { ButtonCommponent } from "src/app/component/button/button.component";
const routes: Routes = [
    {
        path: '',
        component: QuestionListComponent
    },
    {
        path: 'new',
        component: QuestionCreateComponent
    }
]

@NgModule({
    declarations: [
        QuestionListComponent,
        QuestionCreateComponent
    ]
    ,
    imports: [
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        SharedModule,
        ButtonCommponent
    ],
    exports: [
        RouterModule,
        QuestionListComponent, QuestionCreateComponent
    ]
})
export class QuestionRouting {

}
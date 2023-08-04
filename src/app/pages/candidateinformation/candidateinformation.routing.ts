import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CandidateInformationCreateComponent } from "./create/candidateinformation-create.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/component/shared/shared.module";
import { ButtonCommponent } from "src/app/component/button/button.component";
const routes: Routes = [
    {
        path: '',
        component: CandidateInformationCreateComponent
    }
]

@NgModule({
    declarations: [
        CandidateInformationCreateComponent
    ]
    ,
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        ButtonCommponent
    ],
    exports: [
        RouterModule,
        CandidateInformationCreateComponent
    ]
})

export class CandidateInformationRouting {

}
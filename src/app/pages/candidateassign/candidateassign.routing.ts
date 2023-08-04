import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CandidateAssignCreateComponent } from "./create/candidateassign-create.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/component/shared/shared.module";
import { ButtonModule } from "primeng/button";
import { ButtonCommponent } from "src/app/component/button/button.component";

const routes: Routes = [
    {
        path: '',
        component: CandidateAssignCreateComponent
    }
]

@NgModule({
    declarations: [
        CandidateAssignCreateComponent
    ]
    ,
    imports: [
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        SharedModule,
        ButtonCommponent
    ],
    exports: [
        RouterModule,
        CandidateAssignCreateComponent
    ]
})
export class CandidateAssignRouting {

}
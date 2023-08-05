import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuestionPackageListComponent } from "./list/questionpackage-list.component";
import { QuestionPackageCreateComponent } from "./create/questionpackage-create.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from "primeng/card";
import { SharedModule } from "src/app/component/shared/shared.module";
const routes: Routes = [
    {
        path: '',
        component: QuestionPackageListComponent
    },
    {
        path: 'create',
        component: QuestionPackageCreateComponent
    }
]

@NgModule({
    declarations: [
        QuestionPackageListComponent,
        QuestionPackageCreateComponent
    ]
    ,
    imports: [
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule, CommonModule, TableModule, ButtonModule, TableModule,
        CardModule, SharedModule
    ],
    exports: [
        RouterModule,
        QuestionPackageListComponent,
        QuestionPackageCreateComponent

    ]
})
export class QuestionPackageRouting {

}
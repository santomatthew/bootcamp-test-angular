import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReviewListComponent } from "./list/review-list.component";
import { ReviewUpdateComponent } from "./update/review-update.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/component/shared/shared.module";
import { ButtonCommponent } from "src/app/component/button/button.component";
const routes: Routes = [
    {
        path: '',
        component: ReviewListComponent
    },
    {
        path: 'update/:id',
        component: ReviewUpdateComponent
    }
]

@NgModule({
    declarations: [
        ReviewListComponent,
        ReviewUpdateComponent,
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
        ReviewListComponent,
        ReviewUpdateComponent
    ]
})

export class ReviewRouting {

}
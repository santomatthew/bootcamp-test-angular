import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BaseModule } from "./component/base/base.module";
import { BaseComponent } from "./component/base/base.component";
import { LoginComponent } from "./pages/login/login.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { NotFoundComponent } from "./component/notfound/notfound.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserRole } from "./constant/role.constant";
import { authValidation, authValidationNonlogin } from "./validation/auth.validation";
import { CommonModule } from "@angular/common";
import { UrlPipe } from "./pipes/url.pipe";
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { ButtonCommponent } from "./component/button/button.component";
import { SharedModule } from "./component/shared/shared.module";

const routes: Routes = [
    {
        component: BaseComponent,
        path: 'users',
        loadChildren: () => import("./pages/users/user.module").then(u => u.UserModule),
        canMatch: [authValidationNonlogin],
    },
    {
        component: BaseComponent,
        path: 'candidateassigns',
        loadChildren: () => import("./pages/candidateassign/candidateassign.module").then(c => c.CandidateAssignModule)
        , canMatch: [authValidationNonlogin]
    },
    {
        path: 'candidateinformations',
        loadChildren: () => import("./pages/candidateinformation/candidateinformation.module").then(c => c.CandidateInformationModule),
        data: [UserRole.CANDIDATE],
        canMatch: [authValidationNonlogin]
    },
    {
        component: BaseComponent,
        path: 'questions',
        loadChildren: () => import("./pages/question/question.module").then(q => q.QuestionModule)
        , canMatch: [authValidationNonlogin]
    },
    {
        path: 'questionanswers',
        loadChildren: () => import('./pages/questionanswer/questionanswer.module').then(q => q.QuestionAnswerModule),
        data: [UserRole.CANDIDATE],
        canMatch: [authValidationNonlogin]
    },
    {
        component: BaseComponent,
        path: 'questionpackages',
        loadChildren: () => import('./pages/questionpackage/questionpackage.module').then(q => q.QuestionPackageModule),
        canMatch: [authValidationNonlogin]
    },
    {
        component: BaseComponent,
        path: 'questiontopics',
        loadChildren: () => import('./pages/questiontopic/questiontopic.module').then(q => q.QuestionTopicModule)
        , canMatch: [authValidationNonlogin]
    },
    {
        component: BaseComponent,
        path: 'reviews',
        loadChildren: () => import('./pages/review/review.module').then(r => r.ReviewModule),
        canMatch: [authValidationNonlogin]
    },

    {
        component: BaseComponent,
        path: 'dashboard',
        children: [{
            component: DashboardComponent,
            path: '',
            canMatch: [authValidationNonlogin],
        }]
    },
    {
        component: LoginComponent,
        path: 'login',
        canMatch: [authValidation]
        // data: [UserRole.SUPERADMIN],
        // canMatch: [roleValidation]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({

    declarations: [
        DashboardComponent, LoginComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BaseModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        UrlPipe,
        ButtonModule,
        CardModule,
        BrowserAnimationsModule,
        ButtonCommponent,
        SharedModule

    ],
    exports: [
        RouterModule, DashboardComponent
    ]
})
export class AppRouting {

}
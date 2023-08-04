import { NgModule } from "@angular/core";
import { UserListComponent } from "./list/user-list.component";
import { Routes, RouterModule } from "@angular/router";
import { UserCreateComponent } from "./create/user-create.component";
import { UserProfileComponent } from "./profile/user-profile.component";
import { UserChangePassword } from "./change-password/user-changepassword.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../component/shared/shared.module";

const routes: Routes = [
    {
        path: '',
        component: UserListComponent
    },
    {
        path: 'new',
        component: UserCreateComponent
    },
    {
        path: 'profile',
        component: UserProfileComponent
    },
    {
        path: 'change-password',
        component: UserChangePassword
    }
]

@NgModule({
    declarations: [
        UserListComponent,
        UserCreateComponent,
        UserProfileComponent,
        UserChangePassword,
    ]
    ,
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    exports: [
        RouterModule,

    ]
})
export class UserRouting {

}
import { NgModule } from "@angular/core";
import { QuestionPackageRouting } from "./questionpackage.routing";
import { SharedModule } from "src/app/component/shared/shared.module";

@NgModule({

    imports: [
        QuestionPackageRouting, SharedModule
    ]
})
export class QuestionPackageModule {

}
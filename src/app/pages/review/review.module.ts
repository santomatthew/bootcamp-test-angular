import { NgModule } from "@angular/core";
import { ReviewRouting } from "./review.routing";
import { SharedModule } from "src/app/component/shared/shared.module";

@NgModule({
    imports: [
        ReviewRouting,
    ]
})
export class ReviewModule { }
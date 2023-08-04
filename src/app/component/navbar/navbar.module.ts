import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [NavbarComponent],
    imports: [RouterLink,
        CommonModule, SharedModule],
    exports: [NavbarComponent]
})
export class NavbarModule {

}
import { NgModule } from "@angular/core";
import { BaseComponent } from "./base.component";
import { RouterModule } from "@angular/router";
import { NavbarModule } from "../navbar/navbar.module";


@NgModule({
    declarations: [BaseComponent],
    imports: [NavbarModule, RouterModule],

})
export class BaseModule {

}
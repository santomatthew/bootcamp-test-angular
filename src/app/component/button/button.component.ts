import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
    selector: 'app-button',
    template: `
        <p-button type="{{typeBtn}}" [label]="label" [styleClass]="styleBtn" [loading]="loading" (onClick)="clickBtn()"></p-button>

        <!-- <button class="btn {{classBtn}}" (click)=clickBtn()>{{label}}</button> -->
    `,
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonCommponent {

    @Input() styleBtn = ''
    @Input() typeBtn = ''
    @Input() loading = false
    @Input() label = ''
    @Input() classBtn = ''

    @Output() clickChange = new EventEmitter<void>()

    clickBtn() {
        this.clickChange.emit()
    }

}
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { ButtonCommponent } from "../button/button.component";


@NgModule({


    imports: [
        CommonModule, MenubarModule, DropdownModule, SpeedDialModule, TableModule
        , ButtonModule, DialogModule, RadioButtonModule, CardModule, InputTextModule,
        InputTextareaModule, FileUploadModule, CheckboxModule, CalendarModule, ButtonCommponent
    ],
    exports: [
        MenubarModule, DropdownModule, SpeedDialModule, TableModule
        , ButtonModule, DialogModule, RadioButtonModule, CardModule, InputTextModule,
        InputTextareaModule, FileUploadModule, CheckboxModule, CalendarModule, ButtonCommponent
    ]
})
export class SharedModule {

}
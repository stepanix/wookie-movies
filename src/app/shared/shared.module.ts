import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { LoadingIndicatorComponent } from "./components/loading-indicator/loading-indicator.component";
import { PageHeaderComponent } from "./components/page-header/page-header.component";


@NgModule({
    declarations: [LoadingIndicatorComponent, PageHeaderComponent],
    exports: [LoadingIndicatorComponent, PageHeaderComponent],
    imports: [
        CommonModule,
        FontAwesomeModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
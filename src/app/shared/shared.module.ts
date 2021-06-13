import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingIndicatorComponent } from "./components/loading-indicator/loading-indicator.component";


@NgModule({
    declarations: [LoadingIndicatorComponent],
    exports: [LoadingIndicatorComponent],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
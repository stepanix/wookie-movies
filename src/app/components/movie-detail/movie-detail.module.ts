import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "src/app/shared/shared.module";
import { MovieDetailRoutingModule } from "./movie-detail-routing.module";
import { MovieDetailComponent } from "./movie-detail.component";


@NgModule({
    declarations: [
        MovieDetailComponent
    ],
    imports: [
        ReactiveFormsModule,
        SharedModule,
        FontAwesomeModule,
        MovieDetailRoutingModule
    ],
    providers: []
})
export class MovieDetailModule { }
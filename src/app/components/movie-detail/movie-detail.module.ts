import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "src/app/shared/shared.module";
import { MovieDetailFacade } from "./facades/movie-detail.facade";
import { MovieDetailRoutingModule } from "./movie-detail-routing.module";
import { MovieDetailComponent } from "./movie-detail.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        MovieDetailComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        FontAwesomeModule,
        MovieDetailRoutingModule,
        NgbModule
    ],
    providers: [MovieDetailFacade]
})
export class MovieDetailModule { }
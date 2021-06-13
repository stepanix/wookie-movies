import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgxsModule } from "@ngxs/store";
import { SharedModule } from "src/app/shared/shared.module";
import { MovieListFacade } from "./facades/movie-list.facade";
import { MovieListComponent } from "./movie-list.component";

import { MovieListApiService } from "./services/apis/movie-list.api.service";
import { MovieListState } from "./store/states/movie-list.state";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from "@angular/common";
import { MovieListRoutingModule } from "./movie-list-routing.module";

@NgModule({
    declarations: [
        MovieListComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        FontAwesomeModule,
        MovieListRoutingModule,
        NgxsModule.forFeature([MovieListState])
    ],
    providers: [MovieListApiService, MovieListFacade]
})
export class MovieListModule { }
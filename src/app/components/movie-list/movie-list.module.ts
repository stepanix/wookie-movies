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

@NgModule({
    declarations: [
        MovieListComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        SharedModule,
        FontAwesomeModule,
        NgxsModule.forFeature([MovieListState])
    ],
    providers: [MovieListApiService, MovieListFacade]
})
export class MovieListModule { }
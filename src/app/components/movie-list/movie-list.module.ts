import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgxsModule } from "@ngxs/store";
import { MovieListListFacade } from "./facades/movie-list.facade";
import { MovieListComponent } from "./movie-list.component";

import { MovieListApiService } from "./services/apis/movie-list.api.service";
import { MovieListState } from "./store/states/movie-list.state";


@NgModule({
    declarations: [
        MovieListComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        NgxsModule.forFeature([MovieListState])
    ],
    providers: [MovieListApiService, MovieListListFacade]
})
export class MovieListModule { }
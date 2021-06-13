import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";


import { MovieListResponseModel } from "src/app/shared/models/movie-list-response.model";
import { MovieModel } from "src/app/shared/models/movie.model";
import { MovieListListFacade } from "../../facades/movie-list.facade";
import { MovieListModel } from "../../models/movie-list.model";
import { MovieListApiService } from "../../services/apis/movie-list.api.service";
import { GetMovieList } from "../actions/movie-list.actions";


export interface MovieListStateModel {
    movieList: Array<MovieModel>;
    groupedMovieList: Array<MovieListModel>
    error: any;
    isLoading: boolean
}

@State<MovieListStateModel>({
    name: 'movies',
    defaults: {
        movieList: [],
        groupedMovieList: [],
        error: null,
        isLoading: true
    }
})

// Movie List state
@Injectable()
export class MovieListState {

    constructor(private movieListService: MovieListApiService, private movieListFacade: MovieListListFacade) {
    }

    @Selector()
    static getMovieList(state: MovieListStateModel) {
        return state.movieList;
    }

    @Selector()
    static getGroupedMovieList(state: MovieListStateModel) {
        return state.groupedMovieList;
    }

    @Selector()
    static getError(state: MovieListStateModel) {
        return state.error;
    }

    @Selector()
    static isLoading(state: MovieListStateModel) {
        return state.isLoading;
    }

    @Action(GetMovieList)
    getMovieList({ getState, setState }: StateContext<MovieListStateModel>) {
        const state = getState();
        return this.movieListService.get().pipe(
            tap((response: MovieListResponseModel) => {
                setState({
                    ...state,
                    movieList: response.movies,
                    groupedMovieList: this.movieListFacade.transform(response.movies),
                    isLoading: false
                });
            }),
            catchError((err: HttpErrorResponse) => {
                setState({
                    ...state,
                    isLoading: false
                });
                return throwError(new Error(err.message));
            })
        );
    }


}
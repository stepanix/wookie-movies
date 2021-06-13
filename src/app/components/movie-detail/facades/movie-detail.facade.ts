import { Injectable } from "@angular/core";
import { MovieModel } from "src/app/shared/models/movie.model";

@Injectable()
export class MovieDetailFacade {

    constructor() { };

    public selectMovieBySlug(slug: string, data: Array<MovieModel>): MovieModel {
        let selectedMovie: MovieModel = {} as MovieModel;

        if (data && data.length > 0) {
            selectedMovie = data.filter((res: MovieModel) => res.slug === slug)[0];
        }

        return selectedMovie;
    }


}
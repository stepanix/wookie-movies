import { MovieModel } from "src/app/shared/models/movie.model";

export interface MovieListModel {
    genre: string;
    movies: Array<MovieModel>;
}
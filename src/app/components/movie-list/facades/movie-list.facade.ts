import { Injectable } from "@angular/core";
import { MovieModel } from "src/app/shared/models/movie.model";
import { MovieListModel } from "../models/movie-list.model";


@Injectable()
export class MovieListListFacade {

    constructor() { };

    // function to group array of movie list by genre
    public transform(data: Array<MovieModel>): Array<MovieListModel> {

        if (data && data.length > 0) {
            const movieGenreMap = new Map<string, Array<MovieModel>>();
            const movieList: Array<MovieListModel> = [];

            data.forEach((res: MovieModel) => {
                res.genres.forEach((gen: string) => {
                    let movieListValue: MovieModel[] = movieGenreMap.get(gen) as MovieModel[];
                    if (movieListValue && movieListValue.length > 0) {
                        movieListValue.push(res);
                    } else {
                        movieListValue = [res];
                    }
                    movieGenreMap.set(gen, movieListValue);
                });
            });

            for (let [key, value] of movieGenreMap) {
                movieList.push({
                    genre: key,
                    movies: value
                });
            }
            return movieList;
        }
        return [];
    }
}
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { MovieModel } from "src/app/shared/models/movie.model";
import { SearchMovieList } from "../movie-list/store/actions/movie-list.actions";
import { MovieListState } from "../movie-list/store/states/movie-list.state";
import { MovieDetailFacade } from "./facades/movie-detail.facade";


@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

    slug: string = '';

    @Select(MovieListState.getMovieList)
    movieList$: Observable<Array<MovieModel>> | undefined;

    movieModel: MovieModel = {imdb_rating: 0} as MovieModel;
    rate: number = 1;
    isReadOnly: boolean = true;

    constructor(private store: Store, private route: ActivatedRoute, private movieDetailFacade: MovieDetailFacade) {
        this.slug = this.route.snapshot.params.slug;
    }

    ngOnInit(): void {
        this.movieList$?.subscribe((res: Array<MovieModel>) => {

            // handle search via api and cache result in store if user refreshes current page.
            if(res?.length < 1) {
                this.store.dispatch(new SearchMovieList(this.slug));
            }
            
            this.movieModel = this.movieDetailFacade.selectMovieBySlug(this.slug, res);
            
        });
    }

}
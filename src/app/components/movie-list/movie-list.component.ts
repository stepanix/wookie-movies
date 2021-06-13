import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { MovieListFacade } from './facades/movie-list.facade';
import { MovieListModel } from './models/movie-list.model';
import { GetMovieList, SearchMovieList } from './store/actions/movie-list.actions';
import { MovieListState } from './store/states/movie-list.state';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {

  faSearch = faSearch;
  searchMovieForm: FormGroup;

  @Select(MovieListState.getGroupedMovieList)
  groupedMovieList$: Observable<Array<MovieListModel>> | undefined;

  @Select(MovieListState.isLoading)
  isLoading$: Observable<boolean> | undefined;

  @Select(MovieListState.getError)
  error$: Observable<any> | undefined;

  groupedMovieList: Array<MovieListModel> = [];

  subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private store: Store, private movieListFacade: MovieListFacade) {
    this.searchMovieForm = this.fb.group({
      txtSearchInput: ['', Validators.required]
    });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.store.dispatch(new GetMovieList);
    const groupMovieListSubscription = this.groupedMovieList$?.subscribe((res: MovieListModel[]) => {
      this.groupedMovieList = res;
    });
    this.subscription.add(groupMovieListSubscription);
  }

  searchMovie() {
    const searchValue = this.searchMovieForm.controls['txtSearchInput'].value
    this.store.dispatch(new SearchMovieList(searchValue));
  }

}

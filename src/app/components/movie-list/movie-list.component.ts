import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { MovieListFacade } from './facades/movie-list.facade';
import { MovieListModel } from './models/movie-list.model';
import { GetMovieList, SearchMovieList } from './store/actions/movie-list.actions';
import { MovieListState } from './store/states/movie-list.state';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  faSearch = faSearch;
  searchMovieForm: FormGroup;

  @Select(MovieListState.getGroupedMovieList)
  groupedMovieList$: Observable<Array<MovieListModel>> | undefined;

  @Select(MovieListState.isLoading)
  isLoading$: Observable<boolean> | undefined;

  @Select(MovieListState.getError)
  error$: Observable<any> | undefined;

  groupedMovieList: Array<MovieListModel> = [];

  constructor(private fb: FormBuilder, private store: Store, private movieListFacade: MovieListFacade) { 
    this.searchMovieForm = this.fb.group({
      txtSearchInput: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new GetMovieList);
    this.groupedMovieList$?.subscribe((res: MovieListModel[]) => {
      this.groupedMovieList = res;
    });
  }

  searchMovie() {
    const searchValue = this.searchMovieForm.controls['txtSearchInput'].value
    this.store.dispatch(new SearchMovieList(searchValue));
  }

}

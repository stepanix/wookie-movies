import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetMovieList } from './store/actions/movie-list.actions';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetMovieList);
  }

}

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NgxsModule, Store } from '@ngxs/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieListFacade } from './facades/movie-list.facade';

import { MovieListComponent } from './movie-list.component';
import { MovieListApiService } from './services/apis/movie-list.api.service';
import { GetMovieList, SearchMovieList } from './store/actions/movie-list.actions';
import { MovieListState } from './store/states/movie-list.state';

describe('MovieListComponent', () => {
  let store: Store;
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieListComponent],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule, NgxsModule.forRoot([MovieListState]), SharedModule],
      providers: [MovieListApiService, MovieListFacade],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    store = getTestBed().inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should dispatch GetMovieList when slug is undefined or empty', () => {
    component.slug = '';
    spyOn(component.store, 'dispatch').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(new GetMovieList());
  });

  it('should dispatch SearchMovieList when slug is not empty', () => {
    component.slug = 'the-kings-speech-2010';
    spyOn(component.store, 'dispatch').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(new SearchMovieList(component.slug));
  });


});

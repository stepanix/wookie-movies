import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { getTestBed, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { of, throwError } from 'rxjs';
import { MovieListFacade } from '../../facades/movie-list.facade';
import { MovieListApiService } from '../../services/apis/movie-list.api.service';
import { jsonResponseStub } from '../../stubs/json-response.stub';
import { GetMovieList, SearchMovieList } from '../actions/movie-list.actions';
import { MovieListState, MovieListStateModel } from './movie-list.state';

fdescribe('movie list state', () => {

    let store: Store;
    let service: MovieListApiService;
    let facade: MovieListFacade;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, NgxsModule.forRoot([MovieListState])],
            providers: [MovieListApiService
                , MovieListFacade]
        });

        store = getTestBed().inject(Store);
        service = getTestBed().inject(MovieListApiService);
        facade = getTestBed().inject(MovieListFacade);

    });

    it('should cache returned response in movielist store', waitForAsync(() => {
        spyOn(service, 'get').and.returnValue(of(jsonResponseStub));
        store.dispatch(new GetMovieList());

        store.selectOnce(MovieListState).subscribe((data: MovieListStateModel) => {
            expect(data.movieList.length).toBeGreaterThan(0);
            expect(data.groupedMovieList.length).toBeGreaterThan(0);
        });
    }));

    it('should cache returned response in movielist store when search query is used', waitForAsync(() => {
        spyOn(service, 'search').and.returnValue(of(jsonResponseStub));
        store.dispatch(new SearchMovieList("the-kings-speech-2010"))

        store.selectOnce(MovieListState).subscribe((data: MovieListStateModel) => {
            expect(data.movieList.length).toBeGreaterThan(0);
            expect(data.isLoading).toEqual(false);
        });
    }));

    it('should cache returned error in movielist store when GetMovieList is dispatched', waitForAsync(() => {
        spyOn(service, 'get').and.returnValue(throwError({ status: 500, message: 'error' }));
        store.dispatch(new GetMovieList());

        store.selectOnce(MovieListState).subscribe((data: MovieListStateModel) => {
            expect(data.error).toBeTruthy();
        });
    }));

    it('should cache returned error in movielist store when SearchMovieList is dispatched', waitForAsync(() => {
        spyOn(service, 'search').and.returnValue(throwError({ status: 500, message: 'error' }));
        store.dispatch(new SearchMovieList("test"));

        store.selectOnce(MovieListState).subscribe((data: MovieListStateModel) => {
            expect(data.error).toBeTruthy();
        });
    }));


});
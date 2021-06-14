import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, getTestBed, TestBed } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { NgxsModule, Store } from "@ngxs/store";
import { of } from "rxjs";
import { MovieListFacade } from "../movie-list/facades/movie-list.facade";
import { MovieListApiService } from "../movie-list/services/apis/movie-list.api.service";
import { SearchMovieList } from "../movie-list/store/actions/movie-list.actions";
import { MovieListState } from "../movie-list/store/states/movie-list.state";
import { jsonResponseStub } from "../movie-list/stubs/json-response.stub";
import { MovieDetailFacade } from "./facades/movie-detail.facade";
import { MovieDetailComponent } from "./movie-detail.component";


describe('MovieDetailComponent', () => {
    let store: Store;
    let component: MovieDetailComponent;
    let fixture: ComponentFixture<MovieDetailComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MovieDetailComponent],
            imports: [RouterModule.forRoot([]), HttpClientTestingModule, NgxsModule.forRoot([MovieListState])],
            providers: [MovieListApiService, MovieDetailFacade, MovieListFacade],
        }).compileComponents();
        store = getTestBed().inject(Store);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should dispatch SearchMovieList when movie list in the store is empty', () => {
        spyOn(component.store, 'dispatch').and.callThrough();
        component.slug = 'the-kings-speech-2010';
        component.ngOnInit();
        fixture.detectChanges();
        expect(store.dispatch).toHaveBeenCalledWith(new SearchMovieList("the-kings-speech-2010"));
    });

    it('should check that movieModel is not undefined', () => {
        spyOn(store, 'select').and.returnValue(of(jsonResponseStub));
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.movieModel).toBeTruthy();
    });

});
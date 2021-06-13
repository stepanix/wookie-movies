import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, getTestBed, TestBed } from "@angular/core/testing";
import { NgxsModule, Store } from "@ngxs/store";
import { MovieListFacade } from "src/app/components/movie-list/facades/movie-list.facade";
import { MovieListApiService } from "src/app/components/movie-list/services/apis/movie-list.api.service";
import { SearchMovieList } from "src/app/components/movie-list/store/actions/movie-list.actions";
import { MovieListState } from "src/app/components/movie-list/store/states/movie-list.state";
import { SharedModule } from "../../shared.module";
import { PageHeaderComponent } from "./page-header.component";
import { Navigate } from '@ngxs/router-plugin';


describe('PageHeaderComponent', () => {
    let store: Store;
    let component: PageHeaderComponent;
    let fixture: ComponentFixture<PageHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageHeaderComponent],
            imports: [HttpClientTestingModule, NgxsModule.forRoot([MovieListState]), SharedModule],
            providers: [MovieListApiService, MovieListFacade],
        }).compileComponents();
        store = getTestBed().inject(Store);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PageHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call searchMovie, dispatch SearchMovieList and Navigate actions', () => {
        spyOn(component.store, 'dispatch').and.callThrough();
        component.searchMovieForm.controls['txtSearchInput'].setValue("the-kings-speech-2010");
        component.searchMovie();
        fixture.detectChanges();
        expect(store.dispatch).toHaveBeenCalledWith(new SearchMovieList("the-kings-speech-2010"));
        expect(store.dispatch).toHaveBeenCalledWith(new Navigate(["/home", "the-kings-speech-2010"]));
    });


});
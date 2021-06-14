import { getTestBed, TestBed } from "@angular/core/testing";
import { jsonResponseStub } from "../../movie-list/stubs/json-response.stub";
import { MovieDetailFacade } from "./movie-detail.facade";


describe('MovieDetailFacade', () => {
    let facade: MovieDetailFacade;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [],
            providers: [MovieDetailFacade],
        }).compileComponents();
        facade = getTestBed().inject(MovieDetailFacade);
    });

    it('should call selectMovieBySlug and return a selected movie from list of movies', () => {
        const result = facade.selectMovieBySlug("the-dark-knight-2008", jsonResponseStub.movies);
        expect(result).toBeDefined();
    });

});
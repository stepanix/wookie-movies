import { getTestBed, TestBed } from "@angular/core/testing";
import { jsonResponseStub } from "../stubs/json-response.stub";
import { MovieListFacade } from "./movie-list.facade";


describe('MovieListFacade', () => {
    let facade: MovieListFacade;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [],
            providers: [MovieListFacade],
        }).compileComponents();
        facade = getTestBed().inject(MovieListFacade);
    });

    it('should call transform and group a list of movies by genre', () => {
        const result = facade.transform(jsonResponseStub.movies);
        expect(result[0].genre).toBeDefined();
    });

    it('should call transform and return empty array if there are no movies', () => {
        const result = facade.transform([]);
        expect(result.length).toEqual(0);
    });


});
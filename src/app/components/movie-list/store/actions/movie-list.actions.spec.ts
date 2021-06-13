import { GetMovieList, SearchMovieList } from "./movie-list.actions";

describe('movie list actions', () => {
    it('should create a GetMovieList action', () => {
        const action = new GetMovieList();
        expect(GetMovieList.type).toEqual("[MovieList] Get");
    });

    it('should create a SearchMovieList action', () => {
        const action = new SearchMovieList("test");
        expect(SearchMovieList.type).toEqual("[MovieList] Search");
    });
});
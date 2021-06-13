export class GetMovieList {
    static readonly type = "[MovieList] Get";
}

export class SearchMovieList {
    static readonly type = "[MovieList] Search";
    constructor(public payload: string) { }
}


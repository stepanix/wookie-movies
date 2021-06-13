import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { MovieListResponseModel } from "src/app/shared/models/movie-list-response.model";
import { environment } from "src/environments/environment";


@Injectable()
export class MovieListApiService {
    constructor(private httpClient: HttpClient) { }

    get(): Observable<MovieListResponseModel> {
        const endPoint = environment.baseUrl + "movies";
        return this.httpClient.get<MovieListResponseModel>(endPoint);
    }

    search(queryString: string): Observable<MovieListResponseModel> {
        const endPoint = environment.baseUrl + `movies?q=${queryString}`;
        return this.httpClient.get<MovieListResponseModel>(endPoint);
    }
}
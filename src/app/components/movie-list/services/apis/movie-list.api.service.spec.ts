import { TestBed, getTestBed, waitForAsync } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';

import { environment } from 'src/environments/environment';
import { MovieListApiService } from './movie-list.api.service';
import { jsonResponseStub } from '../../stubs/json-response.stub';

describe('MovieListApiService', () => {
    let service: MovieListApiService;
    let httpMock: HttpTestingController;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            providers: [MovieListApiService],
            imports: [HttpClientTestingModule]
        });
        service = getTestBed().inject(MovieListApiService);
        httpMock = getTestBed().inject(HttpTestingController);
    }));

    afterEach(() => {
        httpMock.verify();
    });

    it('should return an Observable response object of MovieListResponseModel', () => {
        expect(service).toBeDefined();

        service.get().subscribe(res => {
            expect(res.movies).toEqual(jsonResponseStub.movies);
        });

        const endPoint = environment.baseUrl + `movies`;
        const req = httpMock.expectOne(endPoint);
        expect(req.request.method).toBe('GET');
        req.flush(jsonResponseStub);
    });

    it('should return an Observable response object of MovieListResponseModel when search query is applied', () => {
        expect(service).toBeDefined();

        service.search("the-dark-knight-2008").subscribe(res => {
            expect(res.movies).toEqual(jsonResponseStub.movies);
        });

        const endPoint = environment.baseUrl + `movies?q=the-dark-knight-2008`;
        const req = httpMock.expectOne(endPoint);
        expect(req.request.method).toBe('GET');
        req.flush(jsonResponseStub);
    });

});
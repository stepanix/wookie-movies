import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngxs/store";
import { SearchMovieList } from "src/app/components/movie-list/store/actions/movie-list.actions";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Navigate } from '@ngxs/router-plugin';


@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {


    faSearch = faSearch;
    searchMovieForm: FormGroup;

    constructor(private fb: FormBuilder, private store: Store) {
        this.searchMovieForm = this.fb.group({
            txtSearchInput: ['', Validators.required]
        });
    }

    searchMovie() {
        const searchValue = this.searchMovieForm.controls['txtSearchInput'].value
        this.store.dispatch(new SearchMovieList(searchValue));
        this.store.dispatch(new Navigate(["/home", searchValue]));
    }

}
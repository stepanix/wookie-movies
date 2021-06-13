import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

    slug: string = '';

    constructor(private route: ActivatedRoute) { 
        this.slug = this.route.snapshot.params.slug;
        console.log('slug', this.slug);
    }

    ngOnInit(): void {

    }

}
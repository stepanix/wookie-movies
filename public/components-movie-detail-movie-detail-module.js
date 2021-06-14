(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-movie-detail-movie-detail-module"],{

/***/ "+cbq":
/*!************************************************************************!*\
  !*** ./src/app/components/movie-detail/movie-detail-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: MovieDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailRoutingModule", function() { return MovieDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _movie_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-detail.component */ "bV9e");





const routes = [
    {
        path: '',
        component: _movie_detail_component__WEBPACK_IMPORTED_MODULE_2__["MovieDetailComponent"]
    }
];
class MovieDetailRoutingModule {
}
MovieDetailRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MovieDetailRoutingModule });
MovieDetailRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MovieDetailRoutingModule_Factory(t) { return new (t || MovieDetailRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MovieDetailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "L+Gd":
/*!************************************************************************!*\
  !*** ./src/app/components/movie-detail/facades/movie-detail.facade.ts ***!
  \************************************************************************/
/*! exports provided: MovieDetailFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailFacade", function() { return MovieDetailFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MovieDetailFacade {
    constructor() { }
    ;
    selectMovieBySlug(slug, data) {
        let selectedMovie = {};
        if (data && data.length > 0) {
            selectedMovie = data.filter((res) => res.slug === slug)[0];
        }
        return selectedMovie;
    }
}
MovieDetailFacade.ɵfac = function MovieDetailFacade_Factory(t) { return new (t || MovieDetailFacade)(); };
MovieDetailFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MovieDetailFacade, factory: MovieDetailFacade.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bV9e":
/*!*******************************************************************!*\
  !*** ./src/app/components/movie-detail/movie-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _movie_list_store_actions_movie_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie-list/store/actions/movie-list.actions */ "qhhm");
/* harmony import */ var _movie_list_store_states_movie_list_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movie-list/store/states/movie-list.state */ "qgv0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _facades_movie_detail_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facades/movie-detail.facade */ "L+Gd");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












const _c0 = function () { return ["/home"]; };
class MovieDetailComponent {
    constructor(store, route, movieDetailFacade) {
        this.store = store;
        this.route = route;
        this.movieDetailFacade = movieDetailFacade;
        this.slug = '';
        this.movieModel = { imdb_rating: 0 };
        this.rate = 1;
        this.isReadOnly = true;
        this.slug = this.route.snapshot.params.slug;
    }
    ngOnInit() {
        var _a;
        (_a = this.movieList$) === null || _a === void 0 ? void 0 : _a.subscribe((res) => {
            // handle search via api and cache result in store if user refreshes current page.
            if ((res === null || res === void 0 ? void 0 : res.length) < 1) {
                this.store.dispatch(new _movie_list_store_actions_movie_list_actions__WEBPACK_IMPORTED_MODULE_3__["SearchMovieList"](this.slug));
            }
            this.movieModel = this.movieDetailFacade.selectMovieBySlug(this.slug, res);
        });
    }
}
MovieDetailComponent.ɵfac = function MovieDetailComponent_Factory(t) { return new (t || MovieDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_facades_movie_detail_facade__WEBPACK_IMPORTED_MODULE_6__["MovieDetailFacade"])); };
MovieDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MovieDetailComponent, selectors: [["app-movie-detail"]], decls: 20, vars: 14, consts: [[1, "container-fluid"], [2, "margin-bottom", "20px"], [3, "routerLink"], [1, "row"], [1, "col-5", "align-poster"], [1, "img-thumbnail", 3, "src", "alt"], [1, "card-box", "col-5"], [1, "title-ext", "movie-details"], [1, "movie-details"], [1, "card-box", "col-2"], [3, "rate", "readonly"]], template: function MovieDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Back to Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ngb-rating", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.movieModel == null ? null : ctx.movieModel.poster, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx.movieModel == null ? null : ctx.movieModel.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.movieModel == null ? null : ctx.movieModel.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 11, ctx.movieModel == null ? null : ctx.movieModel.released_on), " | ", ctx.movieModel == null ? null : ctx.movieModel.length, " | ", ctx.movieModel == null ? null : ctx.movieModel.director, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.movieModel == null ? null : ctx.movieModel.cast, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.movieModel == null ? null : ctx.movieModel.overview, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rate", ctx.movieModel.imdb_rating)("readonly", ctx.isReadOnly);
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__["PageHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbRating"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".movie-details[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n\n.align-poster[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb3ZpZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6Im1vdmllLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZS1kZXRhaWxzIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi5hbGlnbi1wb3N0ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_movie_list_store_states_movie_list_state__WEBPACK_IMPORTED_MODULE_4__["MovieListState"].getMovieList)
], MovieDetailComponent.prototype, "movieList$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MovieDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-movie-detail',
                templateUrl: './movie-detail.component.html',
                styleUrls: ['./movie-detail.component.scss']
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _facades_movie_detail_facade__WEBPACK_IMPORTED_MODULE_6__["MovieDetailFacade"] }]; }, { movieList$: [] }); })();


/***/ }),

/***/ "mro6":
/*!****************************************************************!*\
  !*** ./src/app/components/movie-detail/movie-detail.module.ts ***!
  \****************************************************************/
/*! exports provided: MovieDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailModule", function() { return MovieDetailModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _facades_movie_detail_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facades/movie-detail.facade */ "L+Gd");
/* harmony import */ var _movie_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie-detail-routing.module */ "+cbq");
/* harmony import */ var _movie_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie-detail.component */ "bV9e");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");










class MovieDetailModule {
}
MovieDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MovieDetailModule });
MovieDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MovieDetailModule_Factory(t) { return new (t || MovieDetailModule)(); }, providers: [_facades_movie_detail_facade__WEBPACK_IMPORTED_MODULE_5__["MovieDetailFacade"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
            _movie_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["MovieDetailRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MovieDetailModule, { declarations: [_movie_detail_component__WEBPACK_IMPORTED_MODULE_7__["MovieDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
        _movie_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["MovieDetailRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MovieDetailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _movie_detail_component__WEBPACK_IMPORTED_MODULE_7__["MovieDetailComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                    _movie_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["MovieDetailRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
                ],
                providers: [_facades_movie_detail_facade__WEBPACK_IMPORTED_MODULE_5__["MovieDetailFacade"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-movie-detail-movie-detail-module.js.map
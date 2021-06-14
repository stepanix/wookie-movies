(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\liquidchair\Angular Test\wookie-movies\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'https://wookie.codesubmit.io/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "K+Mp":
/*!********************************************************************!*\
  !*** ./src/app/components/movie-list/movie-list-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: MovieListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListRoutingModule", function() { return MovieListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MovieListRoutingModule {
}
MovieListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MovieListRoutingModule });
MovieListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MovieListRoutingModule_Factory(t) { return new (t || MovieListRoutingModule)(); }, imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MovieListRoutingModule, { exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loading-indicator/loading-indicator.component */ "R3W7");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-header/page-header.component */ "tgey");







class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_4__["LoadingIndicatorComponent"], _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_5__["PageHeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [_components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_4__["LoadingIndicatorComponent"], _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_5__["PageHeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_4__["LoadingIndicatorComponent"], _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_5__["PageHeaderComponent"]],
                exports: [_components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_4__["LoadingIndicatorComponent"], _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_5__["PageHeaderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "R3W7":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/loading-indicator/loading-indicator.component.ts ***!
  \************************************************************************************/
/*! exports provided: LoadingIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorComponent", function() { return LoadingIndicatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadingIndicatorComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingIndicatorComponent.ɵfac = function LoadingIndicatorComponent_Factory(t) { return new (t || LoadingIndicatorComponent)(); };
LoadingIndicatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingIndicatorComponent, selectors: [["app-loading-indicator"]], decls: 3, vars: 0, consts: [["role", "status", 1, "spinner-border", "fx-spinner-text"], [1, "sr-only"]], template: function LoadingIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLWluZGljYXRvci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingIndicatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-indicator',
                templateUrl: './loading-indicator.component.html',
                styleUrls: ['./loading-indicator.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/router-plugin */ "TkeJ");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








class AppComponent {
    constructor(actions$) {
        this.title = 'wookie-movies';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        actions$.pipe(Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["ofActionSuccessful"])(_ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_1__["RouterDataResolved"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe((action) => { });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Actions"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 82px auto 32px;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #888;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #696767;\n}\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\nsvg#rocket[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n  height: calc(100vh - 95px);\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFkO0VBQ0UsMEpBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUVKO0FBQ0U7Ozs7OztFQU1FLGFBQUE7QUFFSjtBQUNFO0VBQ0UsU0FBQTtBQUVKO0FBQ0U7RUFDRSxPQUFBO0FBRUo7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRUo7QUFDRTtFQUNFLGNBQUE7QUFFSjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFFSjtBQUNFO0VBQ0UsWUFBQTtBQUVKO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBRUo7QUFDRTtFQUNFLGlCQUFBO0FBRUo7QUFDRTtFQUNFLFVBQUE7QUFFSjtBQUNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBRUo7QUFDRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUNFO0VBQ0UsZUFBQTtBQUVKO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQ0U7RUFDRSxlQUFBO0FBRUo7QUFDRTtFQUNFLDJCQUFBO0VBQ0EsMENBQUE7QUFFSjtBQUNFO0VBQ0UsYUFBQTtBQUVKO0FBQ0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRUo7QUFDRTtFQUNFLGlCQUFBO0FBRUo7QUFDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRUo7QUFDRTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFSjtBQUNFOzs7RUFHRSxjQUFBO0VBQ0EscUJBQUE7QUFFSjtBQUNFO0VBQ0UsY0FBQTtBQUVKO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUVKO0FBQ0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUNFO0VBQ0Usd0VBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0FBRUo7QUFDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHdFQUFBO0VBQ0EsdUJBQUE7QUFFSjtBQUNFO0VBQ0UsK0JBQUE7RUFDQSwyQ0FBQTtBQUVKO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRUo7QUFDRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0VBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMElBQUE7QUFFSjtBQUNFO0VBQ0UsZ0VBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0FBRUo7QUFDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFSjtBQUVFLHNCQUFBO0FBQ0E7RUFFRTs7SUFFRSxXQUFBO0VBQUo7O0VBR0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQUFKOztFQUdFO0lBQ0UsaUJBQUE7RUFBSjs7RUFHRTtJQUNFLFlBQUE7SUFDQSx3QkFBQTtFQUFKO0FBQ0Y7QUFHRTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0VBREo7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxO1xufVxuXG4udG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50b29sYmFyIGltZyB7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4udG9vbGJhciAjdHdpdHRlci1sb2dvIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbzpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDgycHggYXV0byAzMnB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnN2Zy5tYXRlcmlhbC1pY29ucyB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbnN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgZmlsbDogIzg4ODtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgOHB4IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY2FyZC5jYXJkLXNtYWxsIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTY4cHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gIGZpbGw6ICM2OTY3Njc7XG59XG5cbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogNjBweDtcbn1cblxuc3ZnI3JvY2tldCB7XG4gIHdpZHRoOiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMHB4O1xuICB0b3A6IC0yNHB4O1xufVxuXG5zdmcjcm9ja2V0LXNtb2tlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTVweCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTgwcHg7XG4gIHotaW5kZXg6IC0xMDtcbn1cblxuYSxcbmE6dmlzaXRlZCxcbmE6aG92ZXIge1xuICBjb2xvcjogIzE5NzZkMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICMxMjU2OTk7XG59XG5cbi50ZXJtaW5hbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nLXRvcDogNDVweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwZjEwO1xufVxuXG4udGVybWluYWw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4oCi4oCi4oCiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogIzNhM2EzYTtcbiAgY29sb3I6ICNjMmMzYzQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAxNHB4IDA7XG4gIHRleHQtaW5kZW50OiA0cHg7XG59XG5cbi50ZXJtaW5hbCBwcmUge1xuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsIENvbnNvbGFzLCBMaWJlcmF0aW9uIE1vbm8sIE1lbmxvLCBtb25vc3BhY2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAxcmVtIDFyZW07XG4gIG1hcmdpbjogMDtcbn1cblxuLmNpcmNsZS1saW5rIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgbWFyZ2luOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIHRyYW5zaXRpb246IDFzIGVhc2Utb3V0O1xufVxuXG4uY2lyY2xlLWxpbms6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVyZW0pO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG5mb290ZXIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG5mb290ZXIgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5naXRodWItc3Rhci1iYWRnZSB7XG4gIGNvbG9yOiAjMjQyOTJlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDNweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmYWZiZmMsICNlZmYzZjYgOTAlKTtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIEFwcGxlIENvbG9yIEVtb2ppLCBTZWdvZSBVSSBFbW9qaSwgU2Vnb2UgVUkgU3ltYm9sO1xufVxuXG4uZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2YwZjNmNiwgI2U2ZWJmMSA5MCUpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjcsIDMxLCAzNSwgMC4zNSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0wLjVlbTtcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG5zdmcjY2xvdWRzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IC0xNjBweDtcbiAgbGVmdDogLTIzMHB4O1xuICB6LWluZGV4OiAtMTA7XG4gIHdpZHRoOiAxOTIwcHg7XG59XG5cbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspLFxuLnRlcm1pbmFsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgfVxuXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xuICB9XG5cbiAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgcmlnaHQ6IDEyMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Actions"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_interceptors_http_client_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/interceptors/http-client.interceptor */ "yEcz");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "xuHu");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/logger-plugin */ "/wON");
/* harmony import */ var _components_movie_list_movie_list_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/movie-list/movie-list.module */ "hUQm");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngxs/router-plugin */ "TkeJ");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_http_client_interceptor__WEBPACK_IMPORTED_MODULE_5__["HttpClientInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["NgxsModule"].forRoot([]),
            _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_13__["NgxsRouterPluginModule"].forRoot(),
            _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_7__["NgxsReduxDevtoolsPluginModule"].forRoot(),
            _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_8__["NgxsLoggerPluginModule"].forRoot(),
            _components_movie_list_movie_list_module__WEBPACK_IMPORTED_MODULE_9__["MovieListModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["ɵk"], _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_13__["NgxsRouterPluginModule"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_7__["NgxsReduxDevtoolsPluginModule"], _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_8__["NgxsLoggerPluginModule"], _components_movie_list_movie_list_module__WEBPACK_IMPORTED_MODULE_9__["MovieListModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["NgxsModule"].forRoot([]),
                    _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_13__["NgxsRouterPluginModule"].forRoot(),
                    _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_7__["NgxsReduxDevtoolsPluginModule"].forRoot(),
                    _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_8__["NgxsLoggerPluginModule"].forRoot(),
                    _components_movie_list_movie_list_module__WEBPACK_IMPORTED_MODULE_9__["MovieListModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_http_client_interceptor__WEBPACK_IMPORTED_MODULE_5__["HttpClientInterceptor"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cCrV":
/*!***************************************************************!*\
  !*** ./src/app/components/movie-list/movie-list.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _store_actions_movie_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/actions/movie-list.actions */ "qhhm");
/* harmony import */ var _store_states_movie_list_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/states/movie-list.state */ "qgv0");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/loading-indicator/loading-indicator.component */ "R3W7");












const _c0 = function (a1) { return ["/movie-detail", a1]; };
function MovieListComponent_div_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, movie_r5.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", movie_r5.backdrop, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", movie_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](movie_r5.title);
} }
function MovieListComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MovieListComponent_div_2_div_1_div_4_Template, 6, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r3.genre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r3.movies);
} }
function MovieListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MovieListComponent_div_2_div_1_Template, 5, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.groupedMovieList);
} }
function MovieListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loading-indicator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class MovieListComponent {
    constructor(store, route) {
        this.store = store;
        this.route = route;
        this.groupedMovieList = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.slug = '';
        this.slug = this.route.snapshot.params.slug;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        var _a;
        this.groupedMovieList = [];
        if (!this.slug) {
            this.store.dispatch(new _store_actions_movie_list_actions__WEBPACK_IMPORTED_MODULE_3__["GetMovieList"]);
        }
        else {
            this.store.dispatch(new _store_actions_movie_list_actions__WEBPACK_IMPORTED_MODULE_3__["SearchMovieList"](this.slug));
        }
        const groupMovieListSubscription = (_a = this.groupedMovieList$) === null || _a === void 0 ? void 0 : _a.subscribe((res) => {
            this.groupedMovieList = res;
        });
        this.subscription.add(groupMovieListSubscription);
    }
}
MovieListComponent.ɵfac = function MovieListComponent_Factory(t) { return new (t || MovieListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
MovieListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MovieListComponent, selectors: [["app-movie-list"]], decls: 6, vars: 6, consts: [[1, "container-fluid"], [4, "ngIf"], ["class", "spinner-container", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "genre"], [1, "row"], ["class", "col-12 col-sm-6 col-md-4 col-lg-3", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3"], [1, "card", "box", 3, "routerLink"], [1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "card-title", "title-ext"], [1, "spinner-container"]], template: function MovieListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MovieListComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MovieListComponent_div_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.isLoading$) && ctx.groupedMovieList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, ctx.isLoading$));
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _shared_components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_9__["LoadingIndicatorComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".box[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  margin-right: 12px;\n}\n\n.genre[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding-top: 16px;\n  margin-bottom: 12px;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb3ZpZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJtb3ZpZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4uZ2VucmUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbiJdfQ== */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_states_movie_list_state__WEBPACK_IMPORTED_MODULE_4__["MovieListState"].getGroupedMovieList)
], MovieListComponent.prototype, "groupedMovieList$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_states_movie_list_state__WEBPACK_IMPORTED_MODULE_4__["MovieListState"].isLoading)
], MovieListComponent.prototype, "isLoading$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_states_movie_list_state__WEBPACK_IMPORTED_MODULE_4__["MovieListState"].getError)
], MovieListComponent.prototype, "error$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MovieListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-movie-list',
                templateUrl: './movie-list.component.html',
                styleUrls: ['./movie-list.component.scss']
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, { groupedMovieList$: [], isLoading$: [], error$: [] }); })();


/***/ }),

/***/ "e3g6":
/*!********************************************************************!*\
  !*** ./src/app/components/movie-list/facades/movie-list.facade.ts ***!
  \********************************************************************/
/*! exports provided: MovieListFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListFacade", function() { return MovieListFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MovieListFacade {
    constructor() { }
    ;
    // function to group array of movie list by genre
    transform(data) {
        if (data && data.length > 0) {
            const movieGenreMap = new Map();
            const movieList = [];
            data.forEach((res) => {
                res.genres.forEach((gen) => {
                    let movieListValue = movieGenreMap.get(gen);
                    if (movieListValue && movieListValue.length > 0) {
                        movieListValue.push(res);
                    }
                    else {
                        movieListValue = [res];
                    }
                    movieGenreMap.set(gen, movieListValue);
                });
            });
            for (let [key, value] of movieGenreMap) {
                movieList.push({
                    genre: key,
                    movies: value
                });
            }
            return movieList;
        }
        return [];
    }
}
MovieListFacade.ɵfac = function MovieListFacade_Factory(t) { return new (t || MovieListFacade)(); };
MovieListFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MovieListFacade, factory: MovieListFacade.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieListFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hUQm":
/*!************************************************************!*\
  !*** ./src/app/components/movie-list/movie-list.module.ts ***!
  \************************************************************/
/*! exports provided: MovieListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListModule", function() { return MovieListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _facades_movie_list_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facades/movie-list.facade */ "e3g6");
/* harmony import */ var _movie_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-list.component */ "cCrV");
/* harmony import */ var _services_apis_movie_list_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/apis/movie-list.api.service */ "xB6p");
/* harmony import */ var _store_states_movie_list_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/states/movie-list.state */ "qgv0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movie_list_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movie-list-routing.module */ "K+Mp");











class MovieListModule {
}
MovieListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MovieListModule });
MovieListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MovieListModule_Factory(t) { return new (t || MovieListModule)(); }, providers: [_services_apis_movie_list_api_service__WEBPACK_IMPORTED_MODULE_5__["MovieListApiService"], _facades_movie_list_facade__WEBPACK_IMPORTED_MODULE_3__["MovieListFacade"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _movie_list_routing_module__WEBPACK_IMPORTED_MODULE_8__["MovieListRoutingModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["NgxsModule"].forFeature([_store_states_movie_list_state__WEBPACK_IMPORTED_MODULE_6__["MovieListState"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MovieListModule, { declarations: [_movie_list_component__WEBPACK_IMPORTED_MODULE_4__["MovieListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _movie_list_routing_module__WEBPACK_IMPORTED_MODULE_8__["MovieListRoutingModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["ɵbc"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _movie_list_component__WEBPACK_IMPORTED_MODULE_4__["MovieListComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _movie_list_routing_module__WEBPACK_IMPORTED_MODULE_8__["MovieListRoutingModule"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["NgxsModule"].forFeature([_store_states_movie_list_state__WEBPACK_IMPORTED_MODULE_6__["MovieListState"]])
                ],
                providers: [_services_apis_movie_list_api_service__WEBPACK_IMPORTED_MODULE_5__["MovieListApiService"], _facades_movie_list_facade__WEBPACK_IMPORTED_MODULE_3__["MovieListFacade"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "qgv0":
/*!************************************************************************!*\
  !*** ./src/app/components/movie-list/store/states/movie-list.state.ts ***!
  \************************************************************************/
/*! exports provided: MovieListState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListState", function() { return MovieListState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_movie_list_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/movie-list.actions */ "qhhm");
/* harmony import */ var _services_apis_movie_list_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/apis/movie-list.api.service */ "xB6p");
/* harmony import */ var _facades_movie_list_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../facades/movie-list.facade */ "e3g6");









let MovieListState = class MovieListState {
    constructor(movieListService, movieListFacade) {
        this.movieListService = movieListService;
        this.movieListFacade = movieListFacade;
    }
    static getMovieList(state) {
        return state.movieList;
    }
    static getGroupedMovieList(state) {
        return state.groupedMovieList;
    }
    static getError(state) {
        return state.error;
    }
    static isLoading(state) {
        return state.isLoading;
    }
    getMovieList({ getState, setState }) {
        const state = getState();
        return this.movieListService.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((response) => {
            setState(Object.assign(Object.assign({}, state), { movieList: response.movies, groupedMovieList: this.movieListFacade.transform(response.movies), isLoading: false }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            setState(Object.assign(Object.assign({}, state), { error: err.message, isLoading: false }));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new Error(err.message));
        }));
    }
    searchMovieList({ getState, setState }, { payload }) {
        const state = getState();
        return this.movieListService.search(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((response) => {
            setState(Object.assign(Object.assign({}, state), { movieList: response.movies, groupedMovieList: this.movieListFacade.transform(response.movies), isLoading: false }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            setState(Object.assign(Object.assign({}, state), { error: err.message, isLoading: false }));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new Error(err.message));
        }));
    }
};
MovieListState.ɵfac = function MovieListState_Factory(t) { return new (t || MovieListState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_apis_movie_list_api_service__WEBPACK_IMPORTED_MODULE_6__["MovieListApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_facades_movie_list_facade__WEBPACK_IMPORTED_MODULE_7__["MovieListFacade"])); };
MovieListState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MovieListState, factory: MovieListState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_movie_list_actions__WEBPACK_IMPORTED_MODULE_5__["GetMovieList"])
], MovieListState.prototype, "getMovieList", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_movie_list_actions__WEBPACK_IMPORTED_MODULE_5__["SearchMovieList"])
], MovieListState.prototype, "searchMovieList", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()
], MovieListState, "getMovieList", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()
], MovieListState, "getGroupedMovieList", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()
], MovieListState, "getError", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()
], MovieListState, "isLoading", null);
MovieListState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'movies',
        defaults: {
            movieList: [],
            groupedMovieList: [],
            error: null,
            isLoading: true
        }
    })
    // Movie List state
], MovieListState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MovieListState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_apis_movie_list_api_service__WEBPACK_IMPORTED_MODULE_6__["MovieListApiService"] }, { type: _facades_movie_list_facade__WEBPACK_IMPORTED_MODULE_7__["MovieListFacade"] }]; }, { getMovieList: [], searchMovieList: [] }); })();


/***/ }),

/***/ "qhhm":
/*!***************************************************************************!*\
  !*** ./src/app/components/movie-list/store/actions/movie-list.actions.ts ***!
  \***************************************************************************/
/*! exports provided: GetMovieList, SearchMovieList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMovieList", function() { return GetMovieList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMovieList", function() { return SearchMovieList; });
class GetMovieList {
}
GetMovieList.type = "[MovieList] Get";
class SearchMovieList {
    constructor(payload) {
        this.payload = payload;
    }
}
SearchMovieList.type = "[MovieList] Search";


/***/ }),

/***/ "tgey":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.ts ***!
  \************************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_components_movie_list_store_actions_movie_list_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/movie-list/store/actions/movie-list.actions */ "qhhm");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/router-plugin */ "TkeJ");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");









class PageHeaderComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSearch"];
        this.searchMovieForm = this.fb.group({
            txtSearchInput: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    searchMovie() {
        const searchValue = this.searchMovieForm.controls['txtSearchInput'].value;
        this.store.dispatch(new src_app_components_movie_list_store_actions_movie_list_actions__WEBPACK_IMPORTED_MODULE_2__["SearchMovieList"](searchValue));
        this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__["Navigate"](["/home", searchValue]));
    }
}
PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) { return new (t || PageHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
PageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageHeaderComponent, selectors: [["app-page-header"]], decls: 14, vars: 2, consts: [[1, "row", "page-header"], [1, "col-6"], [1, "input-group", "col-6"], [2, "width", "100%", 3, "formGroup"], [1, "input-group"], ["type", "button", 1, "btn", "btn-outline-secondary", "border-right-0", "border", 3, "click"], [3, "icon"], ["type", "search", "formControlName", "txtSearchInput", "placeholder", "search", 1, "form-control", "border", 3, "keyup.enter"]], template: function PageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Wookie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageHeaderComponent_Template_button_click_10_listener() { return ctx.searchMovie(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PageHeaderComponent_Template_input_keyup_enter_12_listener() { return ctx.searchMovie(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchMovieForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSearch);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-header',
                templateUrl: './page-header.component.html',
                styleUrls: ['./page-header.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/movie-list/movie-list.component */ "cCrV");





const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        component: _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_2__["MovieListComponent"],
        path: 'home'
    },
    {
        component: _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_2__["MovieListComponent"],
        path: 'home/:slug'
    },
    {
        path: 'movie-detail/:slug',
        loadChildren: () => __webpack_require__.e(/*! import() | components-movie-detail-movie-detail-module */ "components-movie-detail-movie-detail-module").then(__webpack_require__.bind(null, /*! ./components/movie-detail/movie-detail.module */ "mro6")).then(mod => mod.MovieDetailModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xB6p":
/*!*******************************************************************************!*\
  !*** ./src/app/components/movie-list/services/apis/movie-list.api.service.ts ***!
  \*******************************************************************************/
/*! exports provided: MovieListApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListApiService", function() { return MovieListApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class MovieListApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    get() {
        const endPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + "movies";
        return this.httpClient.get(endPoint);
    }
    search(queryString) {
        const endPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + `movies?q=${queryString}`;
        return this.httpClient.get(endPoint);
    }
}
MovieListApiService.ɵfac = function MovieListApiService_Factory(t) { return new (t || MovieListApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MovieListApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MovieListApiService, factory: MovieListApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieListApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "yEcz":
/*!**************************************************************!*\
  !*** ./src/app/core/interceptors/http-client.interceptor.ts ***!
  \**************************************************************/
/*! exports provided: HttpClientInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientInterceptor", function() { return HttpClientInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


// this intercepts every http request and also an error received from the end point.
// It also the ideal layer to inject tokens, etc in the header.
class HttpClientInterceptor {
    intercept(request, next) {
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        const customReq = request.clone({
            headers: request.headers.set('Authorization', 'Bearer Wookie2019')
        });
        return next.handle(customReq);
    }
}
HttpClientInterceptor.ɵfac = function HttpClientInterceptor_Factory(t) { return new (t || HttpClientInterceptor)(); };
HttpClientInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpClientInterceptor, factory: HttpClientInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClientInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
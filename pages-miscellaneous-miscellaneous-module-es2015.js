(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-miscellaneous-miscellaneous-module"],{

/***/ "ivxX":
/*!*************************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous.module.ts ***!
  \*************************************************************/
/*! exports provided: MiscellaneousModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousModule", function() { return MiscellaneousModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@theme/theme.module */ "vTDv");
/* harmony import */ var _miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./miscellaneous-routing.module */ "z+qo");
/* harmony import */ var _miscellaneous_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./miscellaneous.component */ "qn3S");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "w+5F");







class MiscellaneousModule {
}
MiscellaneousModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MiscellaneousModule });
MiscellaneousModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MiscellaneousModule_Factory(t) { return new (t || MiscellaneousModule)(); }, imports: [[
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
            _miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_3__["MiscellaneousRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MiscellaneousModule, { declarations: [_miscellaneous_component__WEBPACK_IMPORTED_MODULE_4__["MiscellaneousComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]], imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
        _miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_3__["MiscellaneousRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiscellaneousModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                    _miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_3__["MiscellaneousRoutingModule"],
                ],
                declarations: [
                    _miscellaneous_component__WEBPACK_IMPORTED_MODULE_4__["MiscellaneousComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "qn3S":
/*!****************************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous.component.ts ***!
  \****************************************************************/
/*! exports provided: MiscellaneousComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousComponent", function() { return MiscellaneousComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MiscellaneousComponent {
}
MiscellaneousComponent.ɵfac = function MiscellaneousComponent_Factory(t) { return new (t || MiscellaneousComponent)(); };
MiscellaneousComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MiscellaneousComponent, selectors: [["ngx-miscellaneous"]], decls: 1, vars: 0, template: function MiscellaneousComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiscellaneousComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-miscellaneous',
                template: `
    <router-outlet></router-outlet>
  `,
            }]
    }], null, null); })();


/***/ }),

/***/ "z+qo":
/*!*********************************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: MiscellaneousRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousRoutingModule", function() { return MiscellaneousRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _miscellaneous_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miscellaneous.component */ "qn3S");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ "w+5F");






const routes = [
    {
        path: '',
        component: _miscellaneous_component__WEBPACK_IMPORTED_MODULE_2__["MiscellaneousComponent"],
        children: [
            {
                path: '404',
                component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
            },
        ],
    },
];
class MiscellaneousRoutingModule {
}
MiscellaneousRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MiscellaneousRoutingModule });
MiscellaneousRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MiscellaneousRoutingModule_Factory(t) { return new (t || MiscellaneousRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MiscellaneousRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiscellaneousRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-miscellaneous-miscellaneous-module-es2015.js.map
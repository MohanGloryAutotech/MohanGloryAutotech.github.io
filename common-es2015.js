(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "8k+d":
/*!**************************************************!*\
  !*** ./src/app/@theme/services/party.service.ts ***!
  \**************************************************/
/*! exports provided: PartyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyService", function() { return PartyService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.service */ "4/8P");






class PartyService {
    constructor(httpClient, commonService) {
        this.httpClient = httpClient;
        this.commonService = commonService;
    }
    getAllPartyList() {
        return this.httpClient.get(this.commonService.envUrl() + 'getAllParties');
    }
    addNewParty(data) {
        return this.httpClient.post(this.commonService.envUrl() + 'party', data);
    }
    validatePartyCode(partyCode) {
        return this.httpClient.get(this.commonService.envUrl() + 'validate/partyCode/' + partyCode);
    }
    updateParty(data) {
        return this.httpClient.put(this.commonService.envUrl() + 'updateParty', data);
    }
    getPartyById(id) {
        return this.httpClient.get(this.commonService.envUrl() + 'getParty/' + id);
    }
    getAllCategory() {
        return this.httpClient.get(this.commonService.envUrl() + 'allCategory');
    }
}
PartyService.ɵfac = function PartyService_Factory(t) { return new (t || PartyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"])); };
PartyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PartyService, factory: PartyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PartyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "rCKb":
/*!****************************************************!*\
  !*** ./src/app/@theme/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.service */ "4/8P");






class ProductService {
    constructor(httpClient, commonService) {
        this.httpClient = httpClient;
        this.commonService = commonService;
    }
    getAllProductList() {
        return this.httpClient.get(this.commonService.envUrl() + 'product/getAll');
    }
    updateProduct(data) {
        return this.httpClient.post(this.commonService.envUrl() + 'product', data);
    }
    addNewProduct(data) {
        return this.httpClient.post(this.commonService.envUrl() + 'product', data);
    }
    getProductPriceById(id) {
        return this.httpClient.get(this.commonService.envUrl() + 'product/priceList/' + id);
    }
    savePrice(data) {
        return this.httpClient.post(this.commonService.envUrl() + 'savePriceList', data);
    }
    getProductById(id) {
        return this.httpClient.get(this.commonService.envUrl() + 'getProduct/' + id);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map
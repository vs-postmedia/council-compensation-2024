(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 41:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/cloudtables-api/dist/CloudTablesApi.js
var CloudTablesApi = __webpack_require__(35);
var CloudTablesApi_default = /*#__PURE__*/__webpack_require__.n(CloudTablesApi);

// CONCATENATED MODULE: ./src/data/params.js
const params = {
  appId: 'app',
  clientId: 'council-compensation-2024',
  // unique for each dataset
  cloudTableId: '620f2b54-629c-11f0-9b66-5b5135109554',
  // find in embed tab
  // below here probably won’t change 
  tableId: 'cloudtable',
  // DOM element for the table
  cloudTableDomain: 'vs-postmedia-a.cloudtables.me',
  // should probably have 3-4 servers in the pool...
  serverPool: ['vs-postmedia-a.cloudtables.me'
  // 'vs-postmedia-b.cloudtables.me'
  ],
  apiKey: 'kcZqiHL7MiUCi1waLZYN1vkz' // read-only    
};
/* harmony default export */ var data_params = (params);
// EXTERNAL MODULE: ./src/css/normalize.css
var normalize = __webpack_require__(89);

// EXTERNAL MODULE: ./src/css/postmedia.css
var postmedia = __webpack_require__(90);

// EXTERNAL MODULE: ./src/css/colors.css
var colors = __webpack_require__(91);

// EXTERNAL MODULE: ./src/css/fonts.css
var fonts = __webpack_require__(92);

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(93);

// EXTERNAL MODULE: ./src/css/cloudtable.css
var cloudtable = __webpack_require__(94);

// CONCATENATED MODULE: ./src/fonts/Shift-Bold.otf
/* harmony default export */ var Shift_Bold = (__webpack_require__.p + "assets/Shift-Bold.8c454d7e.otf");
// CONCATENATED MODULE: ./src/fonts/Shift-BoldItalic.otf
/* harmony default export */ var Shift_BoldItalic = (__webpack_require__.p + "assets/Shift-BoldItalic.144e2c1f.otf");
// CONCATENATED MODULE: ./src/fonts/BentonSansCond-Regular.otf
/* harmony default export */ var BentonSansCond_Regular = (__webpack_require__.p + "assets/BentonSansCond-Regular.4421f875.otf");
// CONCATENATED MODULE: ./src/fonts/BentonSansCond-RegItalic.otf
/* harmony default export */ var BentonSansCond_RegItalic = (__webpack_require__.p + "assets/BentonSansCond-RegItalic.06edc58b.otf");
// CONCATENATED MODULE: ./src/fonts/BentonSansCond-Bold.otf
/* harmony default export */ var BentonSansCond_Bold = (__webpack_require__.p + "assets/BentonSansCond-Bold.87a66dcd.otf");
// CONCATENATED MODULE: ./src/index.js

;


// CSS







// FONTS






// VARS
const server = data_params.serverPool[0];

// JS FUNCTIONS
const init = async () => {
  // load the unfiltered cloudtable
  loadCloudTable('');
};
async function loadCloudTable(agency) {
  // grab the ct api instance
  let api = new CloudTablesApi_default.a(data_params.apiKey, {
    clientName: data_params.clientId,
    // Client's name - optional
    domain: data_params.serverPool[0] // CloudTables host
  });
  console.log(`https://${server}/io/loader/${data_params.cloudTableId}/table/d`);
  // get a cloudtables api token
  let token = await api.token();
  // build the script tag for the table
  let script = document.createElement('script');
  script.src = `https://${server}/io/loader/${data_params.cloudTableId}/table/d`;
  script.setAttribute('data-token', token);
  script.setAttribute('data-insert', data_params.tableId);
  script.setAttribute('data-clientId', data_params.clientId);

  // insert the script tag to load the table
  let app = document.getElementById(data_params.appId).appendChild(script);
}

// KICK *SHT OFF!!!
init();

/***/ })

},[[95,1,2]]]);
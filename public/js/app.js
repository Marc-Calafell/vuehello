/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ function(module, exports) {

eval("throw new Error(\"Module build failed: SyntaxError: Unexpected token (24:12)\\n    at Parser.pp$4.raise (/home/mark/Codi/vuehello/node_modules/buble/node_modules/acorn/dist/acorn.js:2221:15)\\n    at Parser.pp.unexpected (/home/mark/Codi/vuehello/node_modules/buble/node_modules/acorn/dist/acorn.js:603:10)\\n    at Parser.pp$3.parseIdent (/home/mark/Codi/vuehello/node_modules/buble/node_modules/acorn/dist/acorn.js:2189:12)\\n    at Parser.pp$3.parsePropertyName (/home/mark/Codi/vuehello/node_modules/buble/node_modules/acorn/dist/acorn.js:2052:101)\\n    at Parser.parseObj (/home/mark/Codi/vuehello/node_modules/buble/dist/buble.umd.js:750:16)\\n    at Parser.pp$3.parseExprAtom (/home/mark/Codi/vuehello/node_modules/buble/node_modules/acorn/dist/acorn.js:1805:19)\\n    at Parser.parseExprAtom (/home/mark/Codi/vuehello/node_modules/buble/dist/buble.umd.js:656:26)\\n    at Parser.pp$3.parseExprSubscripts (/home/mark/Codi/vuehello/node_modules/buble/node_modules/acorn/dist/acorn.js:1715:21)\\n    at Parser.pp$3.parseMaybeUnary (/home/mark/Codi/vuehello/node_modules/buble/node_modules/acorn/dist/acorn.js:1692:19)\\n    at Parser.pp$3.parseExprOps (/home/mark/Codi/vuehello/node_modules/buble/node_modules/acorn/dist/acorn.js:1637:21)\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });
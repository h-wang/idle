/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/idle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/idle.js":
/*!*********************!*\
  !*** ./src/idle.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (w, d) {\n    var i = {\n        interval: 60000, debug: false,\n        eventTypes: ['mousemove', 'click', 'keydown', 'scroll'],\n        pathname: null, url: null, escapeUrls: [], timerId: null, callback: null,\n        init: function() {\n            this.initPathname()\n            this.callback = w._idleCallback || this.redirect\n            this.url = w._idleRedirectUrl || null\n            this.debug = w._idleDebug || false\n            if (w._idleCallback) {\n                this.callback = w._idleCallback\n            } else {\n                if (!this.url || this.url == this.pathname) {\n                    this.log('redirect url undefined or is the same as current, abort') \n                    return;\n                }\n                this.callback = this.redirect\n            }\n\n            this.escapeUrls = w._idleEscapeUrl || [];\n            if (this.escapeUrls.indexOf(this.pathname) > -1) {\n                this.log('idel timer is disabled for this page')\n                return;\n            }\n            this.interval = w._idleInterval || this.interval\n            this.eventTypes.forEach(this.listen)\n            this.tick()\n        },\n        listen: function(eventType) {\n            d.addEventListener(eventType, i.tick)\n        },\n        unlisten: function(eventType) {\n            d.removeEventListener(eventType, i.tick)\n        },\n        act: function () {\n            i.callback()\n            i.eventTypes.forEach(i.unlisten)\n            i.log('idle timer disarmed')\n        },\n        tick: function() {\n            w.clearTimeout(i.timerId);\n            i.timerId = w.setTimeout(i.act, i.interval);\n            i.log('idle timer restarted ...')\n        },\n        redirect: function() {\n            i.log('idle timer timeout, bye')\n            d.location.href = i.url;\n        },\n        initPathname: function() {\n            var parser = d.createElement('a');\n            parser.href = ''\n            this.pathname = parser.pathname\n            this.log('pathname: '+this.pathname)\n        },\n        log: function(msg) {\n            if (i.debug) console.log(msg)\n        }\n    }\n    d.addEventListener('DOMContentLoaded', i.init.bind(i));\n})(window, document);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaWRsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pZGxlLmpzPzAxZjAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICh3LCBkKSB7XG4gICAgdmFyIGkgPSB7XG4gICAgICAgIGludGVydmFsOiA2MDAwMCwgZGVidWc6IGZhbHNlLFxuICAgICAgICBldmVudFR5cGVzOiBbJ21vdXNlbW92ZScsICdjbGljaycsICdrZXlkb3duJywgJ3Njcm9sbCddLFxuICAgICAgICBwYXRobmFtZTogbnVsbCwgdXJsOiBudWxsLCBlc2NhcGVVcmxzOiBbXSwgdGltZXJJZDogbnVsbCwgY2FsbGJhY2s6IG51bGwsXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5pbml0UGF0aG5hbWUoKVxuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayA9IHcuX2lkbGVDYWxsYmFjayB8fCB0aGlzLnJlZGlyZWN0XG4gICAgICAgICAgICB0aGlzLnVybCA9IHcuX2lkbGVSZWRpcmVjdFVybCB8fCBudWxsXG4gICAgICAgICAgICB0aGlzLmRlYnVnID0gdy5faWRsZURlYnVnIHx8IGZhbHNlXG4gICAgICAgICAgICBpZiAody5faWRsZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjayA9IHcuX2lkbGVDYWxsYmFja1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudXJsIHx8IHRoaXMudXJsID09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2coJ3JlZGlyZWN0IHVybCB1bmRlZmluZWQgb3IgaXMgdGhlIHNhbWUgYXMgY3VycmVudCwgYWJvcnQnKSBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrID0gdGhpcy5yZWRpcmVjdFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVzY2FwZVVybHMgPSB3Ll9pZGxlRXNjYXBlVXJsIHx8IFtdO1xuICAgICAgICAgICAgaWYgKHRoaXMuZXNjYXBlVXJscy5pbmRleE9mKHRoaXMucGF0aG5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZygnaWRlbCB0aW1lciBpcyBkaXNhYmxlZCBmb3IgdGhpcyBwYWdlJylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gdy5faWRsZUludGVydmFsIHx8IHRoaXMuaW50ZXJ2YWxcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUeXBlcy5mb3JFYWNoKHRoaXMubGlzdGVuKVxuICAgICAgICAgICAgdGhpcy50aWNrKClcbiAgICAgICAgfSxcbiAgICAgICAgbGlzdGVuOiBmdW5jdGlvbihldmVudFR5cGUpIHtcbiAgICAgICAgICAgIGQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGkudGljaylcbiAgICAgICAgfSxcbiAgICAgICAgdW5saXN0ZW46IGZ1bmN0aW9uKGV2ZW50VHlwZSkge1xuICAgICAgICAgICAgZC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaS50aWNrKVxuICAgICAgICB9LFxuICAgICAgICBhY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGkuY2FsbGJhY2soKVxuICAgICAgICAgICAgaS5ldmVudFR5cGVzLmZvckVhY2goaS51bmxpc3RlbilcbiAgICAgICAgICAgIGkubG9nKCdpZGxlIHRpbWVyIGRpc2FybWVkJylcbiAgICAgICAgfSxcbiAgICAgICAgdGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3LmNsZWFyVGltZW91dChpLnRpbWVySWQpO1xuICAgICAgICAgICAgaS50aW1lcklkID0gdy5zZXRUaW1lb3V0KGkuYWN0LCBpLmludGVydmFsKTtcbiAgICAgICAgICAgIGkubG9nKCdpZGxlIHRpbWVyIHJlc3RhcnRlZCAuLi4nKVxuICAgICAgICB9LFxuICAgICAgICByZWRpcmVjdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpLmxvZygnaWRsZSB0aW1lciB0aW1lb3V0LCBieWUnKVxuICAgICAgICAgICAgZC5sb2NhdGlvbi5ocmVmID0gaS51cmw7XG4gICAgICAgIH0sXG4gICAgICAgIGluaXRQYXRobmFtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcGFyc2VyID0gZC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBwYXJzZXIuaHJlZiA9ICcnXG4gICAgICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGFyc2VyLnBhdGhuYW1lXG4gICAgICAgICAgICB0aGlzLmxvZygncGF0aG5hbWU6ICcrdGhpcy5wYXRobmFtZSlcbiAgICAgICAgfSxcbiAgICAgICAgbG9nOiBmdW5jdGlvbihtc2cpIHtcbiAgICAgICAgICAgIGlmIChpLmRlYnVnKSBjb25zb2xlLmxvZyhtc2cpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaS5pbml0LmJpbmQoaSkpO1xufSkod2luZG93LCBkb2N1bWVudCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/idle.js\n");

/***/ })

/******/ });
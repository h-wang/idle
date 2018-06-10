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

eval("(function (w, d) {\n    var i = {\n        interval: 60000, debug: false,\n        eventTypes: ['mousemove', 'click', 'keydown', 'scroll'],\n        pathname: null, url: null, escapeUrls: [], timerId: null, callback: null,\n        init: function() {\n            this.initPathname()\n            // this.url = w._idleRedirectUrl || null\n            // this.debug = w._idleDebug || false\n            if (!this.callback) {\n                if (!this.url || this.url == this.pathname) {\n                    this.log('redirect url undefined or is the same as current, abort') \n                    return;\n                }\n                this.callback = this.redirect\n            }\n            // this.callback = this.callback || this.redirect\n            \n            // this.escapeUrls = w._idleEscapeUrl || [];\n            if (this.escapeUrls.indexOf(this.pathname) > -1) {\n                this.log('idel timer is disabled for this page')\n                return;\n            }\n            // this.interval = w._idleInterval || this.interval\n            this.eventTypes.forEach(this.listen)\n            this.tick()\n        },\n        listen: function(eventType) {\n            d.addEventListener(eventType, i.tick)\n        },\n        unlisten: function(eventType) {\n            d.removeEventListener(eventType, i.tick)\n        },\n        act: function () {\n            i.callback()\n            i.eventTypes.forEach(i.unlisten)\n            i.log('idle timer disarmed')\n        },\n        tick: function() {\n            w.clearTimeout(i.timerId);\n            i.timerId = w.setTimeout(i.act, i.interval);\n            i.log('idle timer restarted ...')\n        },\n        redirect: function() {\n            i.log('idle timer timeout, bye')\n            d.location.href = i.url;\n        },\n        initPathname: function() {\n            var parser = d.createElement('a');\n            parser.href = ''\n            this.pathname = parser.pathname\n            this.log('pathname: '+this.pathname)\n        },\n        log: function(msg) {\n            if (i.debug) w.console.log(msg)\n        }\n    }\n    w._idle = function() {\n        var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));\n        if (!args[0]) return false;\n        if (['url', 'escape', 'interval', 'callback', 'debug'].indexOf(args[0]) > -1) {\n            i[args[0]] = args[1]\n        } else {\n            w.console.log('unsupported _idle parameter'+args[0])\n        }\n    };\n    d.addEventListener('DOMContentLoaded', i.init.bind(i));\n})(window, document);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaWRsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pZGxlLmpzPzAxZjAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICh3LCBkKSB7XG4gICAgdmFyIGkgPSB7XG4gICAgICAgIGludGVydmFsOiA2MDAwMCwgZGVidWc6IGZhbHNlLFxuICAgICAgICBldmVudFR5cGVzOiBbJ21vdXNlbW92ZScsICdjbGljaycsICdrZXlkb3duJywgJ3Njcm9sbCddLFxuICAgICAgICBwYXRobmFtZTogbnVsbCwgdXJsOiBudWxsLCBlc2NhcGVVcmxzOiBbXSwgdGltZXJJZDogbnVsbCwgY2FsbGJhY2s6IG51bGwsXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5pbml0UGF0aG5hbWUoKVxuICAgICAgICAgICAgLy8gdGhpcy51cmwgPSB3Ll9pZGxlUmVkaXJlY3RVcmwgfHwgbnVsbFxuICAgICAgICAgICAgLy8gdGhpcy5kZWJ1ZyA9IHcuX2lkbGVEZWJ1ZyB8fCBmYWxzZVxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVybCB8fCB0aGlzLnVybCA9PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nKCdyZWRpcmVjdCB1cmwgdW5kZWZpbmVkIG9yIGlzIHRoZSBzYW1lIGFzIGN1cnJlbnQsIGFib3J0JykgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjayA9IHRoaXMucmVkaXJlY3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMuY2FsbGJhY2sgPSB0aGlzLmNhbGxiYWNrIHx8IHRoaXMucmVkaXJlY3RcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gdGhpcy5lc2NhcGVVcmxzID0gdy5faWRsZUVzY2FwZVVybCB8fCBbXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmVzY2FwZVVybHMuaW5kZXhPZih0aGlzLnBhdGhuYW1lKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2coJ2lkZWwgdGltZXIgaXMgZGlzYWJsZWQgZm9yIHRoaXMgcGFnZScpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGhpcy5pbnRlcnZhbCA9IHcuX2lkbGVJbnRlcnZhbCB8fCB0aGlzLmludGVydmFsXG4gICAgICAgICAgICB0aGlzLmV2ZW50VHlwZXMuZm9yRWFjaCh0aGlzLmxpc3RlbilcbiAgICAgICAgICAgIHRoaXMudGljaygpXG4gICAgICAgIH0sXG4gICAgICAgIGxpc3RlbjogZnVuY3Rpb24oZXZlbnRUeXBlKSB7XG4gICAgICAgICAgICBkLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBpLnRpY2spXG4gICAgICAgIH0sXG4gICAgICAgIHVubGlzdGVuOiBmdW5jdGlvbihldmVudFR5cGUpIHtcbiAgICAgICAgICAgIGQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGkudGljaylcbiAgICAgICAgfSxcbiAgICAgICAgYWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpLmNhbGxiYWNrKClcbiAgICAgICAgICAgIGkuZXZlbnRUeXBlcy5mb3JFYWNoKGkudW5saXN0ZW4pXG4gICAgICAgICAgICBpLmxvZygnaWRsZSB0aW1lciBkaXNhcm1lZCcpXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdy5jbGVhclRpbWVvdXQoaS50aW1lcklkKTtcbiAgICAgICAgICAgIGkudGltZXJJZCA9IHcuc2V0VGltZW91dChpLmFjdCwgaS5pbnRlcnZhbCk7XG4gICAgICAgICAgICBpLmxvZygnaWRsZSB0aW1lciByZXN0YXJ0ZWQgLi4uJylcbiAgICAgICAgfSxcbiAgICAgICAgcmVkaXJlY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaS5sb2coJ2lkbGUgdGltZXIgdGltZW91dCwgYnllJylcbiAgICAgICAgICAgIGQubG9jYXRpb24uaHJlZiA9IGkudXJsO1xuICAgICAgICB9LFxuICAgICAgICBpbml0UGF0aG5hbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHBhcnNlciA9IGQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgcGFyc2VyLmhyZWYgPSAnJ1xuICAgICAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhcnNlci5wYXRobmFtZVxuICAgICAgICAgICAgdGhpcy5sb2coJ3BhdGhuYW1lOiAnK3RoaXMucGF0aG5hbWUpXG4gICAgICAgIH0sXG4gICAgICAgIGxvZzogZnVuY3Rpb24obXNnKSB7XG4gICAgICAgICAgICBpZiAoaS5kZWJ1Zykgdy5jb25zb2xlLmxvZyhtc2cpXG4gICAgICAgIH1cbiAgICB9XG4gICAgdy5faWRsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IChhcmd1bWVudHMubGVuZ3RoID09PSAxID8gW2FyZ3VtZW50c1swXV0gOiBBcnJheS5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcbiAgICAgICAgaWYgKCFhcmdzWzBdKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChbJ3VybCcsICdlc2NhcGUnLCAnaW50ZXJ2YWwnLCAnY2FsbGJhY2snLCAnZGVidWcnXS5pbmRleE9mKGFyZ3NbMF0pID4gLTEpIHtcbiAgICAgICAgICAgIGlbYXJnc1swXV0gPSBhcmdzWzFdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3LmNvbnNvbGUubG9nKCd1bnN1cHBvcnRlZCBfaWRsZSBwYXJhbWV0ZXInK2FyZ3NbMF0pXG4gICAgICAgIH1cbiAgICB9O1xuICAgIGQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGkuaW5pdC5iaW5kKGkpKTtcbn0pKHdpbmRvdywgZG9jdW1lbnQpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/idle.js\n");

/***/ })

/******/ });
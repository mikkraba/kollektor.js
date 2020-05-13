var _kollektor =
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var InteractionTracker_1 = __webpack_require__(5);
var default_1 = __webpack_require__(3);
var bootstrap4_1 = __webpack_require__(6);
var Configuration_1 = __webpack_require__(7);
var Messenger_1 = __webpack_require__(8);
var Utilities_1 = __webpack_require__(9);
var ConfigurationTemplates_1 = __webpack_require__(4);
var ScrollTracker_1 = __webpack_require__(10);
var PrivacyManager_1 = __webpack_require__(11);
var Kollektor = (function () {
    function Kollektor(options) {
        this.options = options;
        this.messenger = Messenger_1.Messenger.getInstance(this.options.isDebug || false);
        this.privacyManager = new PrivacyManager_1.PrivacyManager(options.privacy);
        this.trackedScrollDistances = [];
    }
    Kollektor.getInstance = function (options) {
        if (!options && !Kollektor.instance || !options) {
            console.error("Kollektor was not provided options and no instance is previously registered.");
            return;
        }
        if (!options && Kollektor.instance) {
            return Kollektor.instance;
        }
        if (options && options.template === "custom"
            && !options.consumers) {
            console.error("Kollektor cannot be registered without any callbacks or plugins");
            return;
        }
        var conf = new Configuration_1.Configuration(options);
        if (!Kollektor.instance) {
            Kollektor.instance = new Kollektor(conf);
        }
        return Kollektor.instance;
    };
    Kollektor.getTemplate = function (template) {
        switch (template) {
            case ConfigurationTemplates_1.ConfigurationTemplates.BOOTSTRAP4:
                return bootstrap4_1.bootstrap4Template;
            default:
                return default_1.defaultTemplate;
        }
    };
    Kollektor.prototype.registerListeners = function () {
        var _this = this;
        this.messenger.log("registerListeners()");
        var events = new Map();
        this.options.targets.forEach(function (target) {
            if (typeof target.events === "string") {
                var event_1 = target.events;
                if (!events.has(event_1)) {
                    events.set(event_1, target.selector);
                }
                else {
                    events.set(event_1, events.get(event_1) + ", " + target.selector);
                }
            }
            else {
                target.events.forEach(function (event) {
                    if (!events.has(event)) {
                        events.set(event, target.selector);
                    }
                    else {
                        events.set(event, events.get(event) + ", " + target.selector);
                    }
                });
            }
        });
        events.forEach(function (selectors, eventName) {
            _this.registerInteractionListener(eventName, selectors);
        });
        if (this.options.scrollDistances.length != 0) {
            this.registerScrollDistanceListener();
        }
    };
    Kollektor.prototype.registerInteractionListener = function (eventName, selectors) {
        this.messenger.log("registerInteractionListeners()");
        var that = this;
        var debounceEvent = Array.isArray(this.options.debounce)
            ? this.options.debounce.find(function (d) { return d.event == eventName; })
            : this.options.debounce;
        if (debounceEvent && (debounceEvent.event == eventName || debounceEvent.event == "all")) {
            document.addEventListener(eventName, Utilities_1.debounce(function (e) {
                var element = e.target;
                for (element; element && element != this; element = element.parentNode) {
                    if (element.matches(selectors)) {
                        that.analyseInteractionEvent(element, e);
                        break;
                    }
                }
            }, debounceEvent.delay), false);
        }
        else {
            document.addEventListener(eventName, function (e) {
                var element = e.target;
                for (element; element && element != this; element = element.parentNode) {
                    if (element.matches(selectors)) {
                        that.analyseInteractionEvent(element, e);
                        break;
                    }
                }
            }, false);
        }
    };
    Kollektor.prototype.registerScrollDistanceListener = function () {
        var debounceEvent = Array.isArray(this.options.debounce)
            ? this.options.debounce.find(function (d) { return d.event == "scroll"; })
            : (this.options.debounce && (this.options.debounce.event == "all" || this.options.debounce.event == "scroll")
                ? this.options.debounce : null);
        var that = this;
        if (debounceEvent) {
            document.addEventListener("scroll", Utilities_1.debounce(function (e) {
                that.analyseScrollEvent(e);
            }, debounceEvent.delay), false);
        }
        else {
            document.addEventListener("scroll", function (e) {
                that.analyseScrollEvent(e);
            }, false);
        }
    };
    Kollektor.prototype.analyseInteractionEvent = function (element, event) {
        this.messenger.log("analyseEvent()");
        if (this.privacyManager.isElementNotSuitable(element)) {
            return;
        }
        var targetComponent = this.options.targets.find(function (target) {
            if (element.matches(target.selector))
                return target;
        }) || null;
        if (!targetComponent)
            return;
        var res = new InteractionTracker_1.InteractionTracker(element, event, targetComponent, this.options.containers);
        if (res) {
            this.sendToAllConsumers(res);
        }
    };
    Kollektor.prototype.analyseScrollEvent = function (event) {
        var _this = this;
        var target = event.target;
        var _a = target, documentElement = _a.documentElement, body = _a.body;
        var documentElementScrollTop = documentElement.scrollTop, documentElementScrollHeight = documentElement.scrollHeight, clientHeight = documentElement.clientHeight;
        var bodyScrollTop = body.scrollTop, bodyScrollHeight = body.scrollHeight;
        var percentage = (documentElementScrollTop || bodyScrollTop) / ((documentElementScrollHeight || bodyScrollHeight) - clientHeight) * 100;
        var passedScrollDistances = this.options.scrollDistances.filter(function (sd) { return sd < percentage; });
        this.messenger.log({
            "optionDistances": this.options.scrollDistances,
            "scrollPercentage": percentage,
            "passedDistances": passedScrollDistances,
            "trackedDistances": this.trackedScrollDistances
        });
        if (!passedScrollDistances.length)
            return;
        passedScrollDistances.forEach(function (d) {
            if (!_this.trackedScrollDistances.includes(d)) {
                _this.sendToAllConsumers(new ScrollTracker_1.ScrollTracker(d, event));
                _this.trackedScrollDistances.push(d);
            }
        });
    };
    Kollektor.prototype.sendToAllConsumers = function (tracker) {
        this.messenger.log("sendToAllConsumers()");
        this.messenger.log(tracker);
        this.forwardToConsumers(tracker);
    };
    Kollektor.prototype.forwardToConsumers = function (tracker) {
        var _this = this;
        this.messenger.log("forwardToConsumers()");
        this.options.consumers.forEach(function (cb) {
            if ((typeof cb.events === "string" && (cb.events === tracker.eventType || cb.events === "all"))
                || cb.events.includes(tracker.eventType)) {
                var data = _this.mapToCallbackObject(tracker, cb.map);
                _this.messenger.log({
                    "consumer": cb.name,
                    "providedData": data
                });
                cb.function(tracker.eventType, data);
            }
        });
    };
    Kollektor.prototype.mapToCallbackObject = function (tracker, cbObject) {
        var _this = this;
        this.messenger.log("mapToCallbackObject()");
        var data = {};
        Object.entries(cbObject).forEach(function (_a) {
            var _b = tslib_1.__read(_a, 2), k = _b[0], v = _b[1];
            var val = v.split('.').reduce(function (a, b) { return a[b]; }, tracker) || "";
            data[k] = _this.privacyManager.maskNumbersLongerThanLimit(val);
        });
        return data;
    };
    Kollektor.prototype.track = function () {
        this.messenger.log("Tracking started");
        this.registerListeners();
    };
    return Kollektor;
}());
exports.Kollektor = Kollektor;
exports.register = function (options) {
    if (!options.consumers) {
        console.warn("Kollektor: cannot be registered without any callbacks or plugins");
        return;
    }
    var badConsumers = options.consumers.filter(function (c) { return !c.name || !c.map || !c.events || !c.function; });
    if (badConsumers.length != 0) {
        console.warn("Kollektor: all consumers must have a name, map, events and function defined", {
            "badConsumers": badConsumers
        });
        return;
    }
    return Kollektor.getInstance(options);
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseTracker = (function () {
    function BaseTracker(e) {
        this.eventType = e.type;
    }
    return BaseTracker;
}());
exports.BaseTracker = BaseTracker;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTemplate = {
    template: "default",
    isDebug: true,
    privacy: {
        masking: true,
        limit: 5,
        excludedSelectors: ['input[type="tel"]']
    },
    debounce: [
        {
            event: "resize",
            delay: 500
        },
        {
            event: "scroll",
            delay: 500
        }
    ],
    targets: [
        {
            name: "link",
            selector: "a",
            events: ["click"]
        },
        {
            name: "button",
            selector: "button",
            events: ["click"]
        },
        {
            name: "video-element",
            selector: "iframe[src*='youtube'], iframe[src*='vimeo'], video",
            identifierAttribute: "src",
            events: ["click"]
        },
        {
            name: "dropdown",
            selector: "select:not(:disabled)",
            events: ["change"]
        },
        {
            name: "checkbox",
            labelAttribute: "value",
            identifierAttribute: "id",
            selector: "input[type='checkbox']:not(:disabled)",
            events: ["change"]
        },
        {
            name: "input",
            selector: "input[type='text']:not(:disabled), input[type='tel']:not(:disabled)",
            events: ["change"]
        }
    ],
    containers: [
        {
            name: "main-container",
            selector: "body, main"
        },
        {
            name: "header",
            selector: "header"
        },
        {
            name: "nav",
            selector: "nav"
        },
        {
            name: "list",
            selector: "ol, ul"
        },
        {
            name: "list-item",
            selector: "ol li, ul li"
        },
        {
            name: "table",
            selector: "table"
        },
        {
            name: "table-header",
            selector: "thead"
        },
        {
            name: "table-body",
            selector: "tbody"
        },
        {
            name: "table-cell",
            selector: "td"
        },
        {
            name: "section",
            selector: "section"
        },
        {
            name: "article",
            selector: "article"
        },
        {
            name: "aside",
            selector: "aside"
        },
        {
            name: "section",
            selector: "section"
        },
        {
            name: "footer",
            selector: "footer"
        },
        {
            name: "form",
            selector: "form"
        }
    ],
    scrollDistances: [25, 50],
    consumers: []
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurationTemplates;
(function (ConfigurationTemplates) {
    ConfigurationTemplates["CUSTOM"] = "custom";
    ConfigurationTemplates["DEFAULT"] = "default";
    ConfigurationTemplates["BOOTSTRAP4"] = "bootstrap4";
})(ConfigurationTemplates = exports.ConfigurationTemplates || (exports.ConfigurationTemplates = {}));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var BaseTracker_1 = __webpack_require__(2);
var InteractionTracker = (function (_super) {
    tslib_1.__extends(InteractionTracker, _super);
    function InteractionTracker(element, e, target, containers) {
        var _this = _super.call(this, e) || this;
        _this.element = element;
        _this.matchedTarget = target;
        _this.matchedContainers = containers;
        _this.nativeProperties = _this.populateNativeProperties();
        _this.collectedProperties = _this.populateData();
        return _this;
    }
    InteractionTracker.prototype.populateNativeProperties = function () {
        return {
            id: this.element.id,
            label: this.element.innerText,
            attributes: this.element.attributes,
            classes: this.element.classList,
            href: this.element.getAttribute("href") || "",
            type: this.element.getAttribute("type") || "",
            role: this.element.getAttribute("role") || "",
            style: this.element.getAttribute("style") || ""
        };
    };
    InteractionTracker.prototype.populateData = function () {
        var targetComponent = this.matchedTarget;
        var element;
        if (targetComponent.condition) {
            if (targetComponent.condition(this.element)) {
                element = this.element;
            }
        }
        else {
            var p = this.element.parentElement;
            var elm = this.element;
            var shareOfSpace = p ? (elm.offsetHeight * elm.offsetWidth) / (p.offsetHeight * p.offsetWidth) : 0;
            while (p && (shareOfSpace > 0.95
                && (elm.offsetHeight > (p.offsetHeight - 10) || elm.offsetWidth > (p.offsetWidth - 10)))
                && !elm.getAttribute("id")) {
                elm = p;
                p = p.parentElement;
                shareOfSpace = p ? (elm.offsetHeight * elm.offsetWidth) / (p.offsetHeight * p.offsetWidth) : 0;
            }
            element = elm;
        }
        return {
            type: this.matchedTarget.name,
            label: this.getLabel(element),
            identificator: this.getIdentificator(element),
            action: this.matchedTarget.name + "-" + this.eventType,
            container: this.getContainerObject(),
            isLink: this.isLink(),
            isOutbound: this.isOutbound()
        };
    };
    InteractionTracker.prototype.getLabel = function (element) {
        if (this.matchedTarget.labelAttribute) {
            if (typeof (this.matchedTarget.labelAttribute) == "string") {
                return this.element.getAttribute(this.matchedTarget.labelAttribute) || "";
            }
            else if (typeof (this.matchedTarget.labelAttribute) == "function") {
                return this.matchedTarget.labelAttribute();
            }
        }
        if (element.matches("input") && this.element.parentElement) {
            var inputLabels = this.element.parentElement.getElementsByTagName('label');
            if (inputLabels.length == 1) {
                return inputLabels[0].innerText;
            }
        }
        if (element)
            return this.nativeProperties.label;
    };
    InteractionTracker.prototype.isLink = function () {
        var href = this.nativeProperties.href;
        return Boolean(href);
    };
    InteractionTracker.prototype.isOutbound = function () {
        if (this.nativeProperties.href) {
            var external_1 = RegExp('^((f|ht)tps?:)?//(?!' + location.host + ')');
            return external_1.test(this.nativeProperties.href);
        }
        return false;
    };
    InteractionTracker.prototype.getIdentificator = function (element) {
        if (this.matchedTarget.identifierAttribute) {
            if (typeof (this.matchedTarget.identifierAttribute) == "string") {
                return this.element.getAttribute(this.matchedTarget.identifierAttribute) || "";
            }
            else if (typeof (this.matchedTarget.identifierAttribute) == "function") {
                return this.matchedTarget.identifierAttribute();
            }
        }
        if (this.nativeProperties.id) {
            return this.nativeProperties.id;
        }
        if (element.id) {
            return element.id;
        }
        if (this.isLink() && this.isOutbound()) {
            return this.nativeProperties.href || "";
        }
        return "";
    };
    InteractionTracker.prototype.getContainerObject = function () {
        var allMatches = [];
        var all = [];
        var res = {
            highest: "",
            lowest: "",
            all: ""
        };
        var parent = this.element.parentElement;
        var first = true;
        while (parent) {
            var matchContainer = this.matchedContainers.find(function (c) { return parent === null || parent === void 0 ? void 0 : parent.matches(c.selector); });
            if (matchContainer) {
                var parentIdentifier = matchContainer.nameAttribute
                    ? parent.getAttribute(matchContainer.nameAttribute)
                    : parent.getAttribute("id");
                var containerVal = "" + matchContainer.name + (parentIdentifier ? "[" + parentIdentifier + "]" : "");
                all.push(containerVal);
                allMatches.push(matchContainer);
                if (first) {
                    res.lowest = containerVal;
                    first = false;
                }
            }
            parent = parent.parentElement;
        }
        if (all.length != 0) {
            res.highest = all[all.length - 1];
        }
        res.all = all.join(":");
        this.matchedContainers = allMatches;
        return res;
    };
    return InteractionTracker;
}(BaseTracker_1.BaseTracker));
exports.InteractionTracker = InteractionTracker;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap4Template = {
    template: "bootstrap4",
    isDebug: false,
    privacy: {
        masking: true,
        limit: 5,
        excludedSelectors: []
    },
    debounce: [
        {
            event: "resize",
            delay: 500
        },
        {
            event: "scroll",
            delay: 500
        }
    ],
    targets: [
        {
            name: "alert-link",
            selector: ".alert a.alert-link",
            events: ["click"]
        },
        {
            name: "alert-close-button",
            selector: ".alert button.close",
            events: ["click"]
        },
        {
            name: "button-badge",
            selector: "button.btn span.badge",
            events: "click"
        },
        {
            name: "link-badge",
            selector: "a.bage",
            events: "click"
        },
        {
            name: "breadcrumb",
            selector: "nav ol.breadcrumb li a",
            events: "click"
        },
        {
            name: "button",
            selector: "a.btn, button.btn, input[type='submit'], input[type='submit'], input[type='reset']",
            events: "click",
        },
        {
            name: "card-link",
            selector: "a.card-link",
            events: "click"
        },
        {
            name: "nav-link",
            selector: "a.nav-link",
            events: "click"
        },
        {
            name: "carousel-control",
            selector: "a[class*='carousel-control']",
            events: "click"
        },
        {
            name: "carousel-indicator",
            selector: "ol.carousel-indicators li",
            events: "click"
        },
        {
            name: "dropdown",
            selector: "a.dropdown-item",
            events: "click"
        },
        {
            name: "input-field",
            selector: "input:not([type='checkbox']):not([type='radio']):not(disabled):not(readonly)",
            events: "change"
        },
        {
            name: "dropdown",
            selector: "select.form-control",
            events: "change"
        },
        {
            name: "checkbox",
            selector: "input[type='checkbox']:not(disabled)",
            events: "change"
        },
        {
            name: "checkbox",
            selector: "input[type='radio']:not(disabled)",
            events: "change"
        },
        {
            name: "checkbox",
            selector: "input[type='radio']:not(disabled)",
            events: "change"
        },
        {
            name: "list-group-item",
            selector: "li.list-group-item",
            events: "click"
        },
        {
            name: "pagintion-item",
            selector: "li.page-item a.page-link",
            events: "click"
        },
        {
            name: "regular-link",
            selector: "a",
            events: "click"
        }
    ],
    containers: [
        {
            name: "alert",
            selector: ".alert"
        },
        {
            name: "alert-header",
            selector: "alert-heading"
        },
        {
            name: "button-group",
            selector: ".btn-group"
        },
        {
            name: "button-toolbar",
            selector: ".btn-toolbar"
        },
        {
            name: "card",
            selector: ".card"
        },
        {
            name: "carousel",
            selector: ".carousel"
        },
        {
            name: "carousel",
            selector: ".carousel"
        },
        {
            name: "accordion",
            selector: ".accordion"
        },
        {
            name: "accordion",
            selector: ".accordion"
        },
        {
            name: "form-group",
            selector: ".form-group"
        },
        {
            name: "form",
            selector: "form",
        },
        {
            name: "jumbotron",
            selector: ".jumbotron"
        },
        {
            name: "list-group",
            selector: ".list-group"
        },
        {
            name: "modal",
            selector: ".modal"
        },
        {
            name: "modal",
            selector: ".modal"
        },
        {
            name: "navigation-menu",
            selector: ".nav, .navbar"
        },
        {
            name: "navigation-menu",
            selector: ".nav, .navbar"
        },
        {
            name: "pagination-pages",
            selector: "ul.pagination"
        },
        {
            name: "navigation-menu",
            selector: ".nav, .navbar"
        },
        {
            name: "toast",
            selector: ".toast"
        }
    ],
    scrollDistances: [],
    consumers: []
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var default_1 = __webpack_require__(3);
var __1 = __webpack_require__(1);
var ConfigurationTemplates_1 = __webpack_require__(4);
var Configuration = (function () {
    function Configuration(options) {
        var o = options.template === ConfigurationTemplates_1.ConfigurationTemplates.CUSTOM
            ? this.mapCustomOptionsToConfiguration(options)
            : __1.Kollektor.getTemplate(options.template);
        this.template = o.template;
        this.isDebug = options.isDebug ? options.isDebug : false;
        this.privacy = options.privacy ? options.privacy : o.privacy;
        this.debounce = options.debounce ? options.debounce : o.debounce;
        this.targets = o.targets;
        this.containers = o.containers;
        this.consumers = options.consumers ? options.consumers : [];
        this.scrollDistances = options.scrollDistances ? options.scrollDistances : o.scrollDistances;
    }
    Configuration.prototype.mapCustomOptionsToConfiguration = function (options) {
        return {
            template: ConfigurationTemplates_1.ConfigurationTemplates.CUSTOM,
            isDebug: options.isDebug ? options.isDebug : false,
            privacy: options.privacy ? options.privacy : default_1.defaultTemplate.privacy,
            debounce: typeof (options.debounce) != "undefined" ? options.debounce : default_1.defaultTemplate.debounce,
            targets: options.targets && options.targets.length != 0 ? options.targets : default_1.defaultTemplate.targets,
            containers: options.containers && options.containers.length != 0 ? options.containers : default_1.defaultTemplate.containers,
            consumers: options.consumers ? options.consumers : [],
            scrollDistances: options.scrollDistances ? options.scrollDistances : []
        };
    };
    return Configuration;
}());
exports.Configuration = Configuration;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Messenger = (function () {
    function Messenger(isDebug) {
        this.isDebug = isDebug;
    }
    Messenger.getInstance = function (isDebug) {
        if (!Messenger.instance) {
            Messenger.instance = new Messenger(isDebug);
        }
        return Messenger.instance;
    };
    Messenger.prototype.log = function (message) {
        if (!this.isDebug)
            return;
        console.log(message);
    };
    Messenger.prototype.error = function (message) {
        if (!this.isDebug)
            return;
        var m = message ? message : "Unknown error";
        console.error(m);
    };
    return Messenger;
}());
exports.Messenger = Messenger;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
exports.debounce = function (func, waitFor) {
    var timeout;
    var debounced = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () { return func.apply(void 0, tslib_1.__spread(args)); }, waitFor);
    };
    return debounced;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var BaseTracker_1 = __webpack_require__(2);
var ScrollTracker = (function (_super) {
    tslib_1.__extends(ScrollTracker, _super);
    function ScrollTracker(scrollPercentage, event) {
        var _this = _super.call(this, event) || this;
        _this.collectedProperties = {
            label: "Scroll distance " + scrollPercentage + "%",
            action: "scroll"
        };
        return _this;
    }
    ScrollTracker.prototype.populateData = function () {
        return;
    };
    return ScrollTracker;
}(BaseTracker_1.BaseTracker));
exports.ScrollTracker = ScrollTracker;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PrivacyManager = (function () {
    function PrivacyManager(settings) {
        this.settings = settings;
    }
    PrivacyManager.prototype.maskNumbersLongerThanLimit = function (value) {
        var regex = new RegExp("[0-9]{" + this.settings.limit + ",}", "g");
        return value.replace(regex, function (match) {
            return Array(match.length + 1).join('n');
        });
    };
    PrivacyManager.prototype.isElementNotSuitable = function (element) {
        var matches = this.settings.excludedSelectors.forEach(function (a) {
            if (element.matches(a)) {
                return true;
            }
        });
        return Boolean(matches);
    };
    return PrivacyManager;
}());
exports.PrivacyManager = PrivacyManager;


/***/ })
/******/ ]);
! function(root, factory) { "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define([], factory) : "object" == typeof exports ? exports.clipboard = factory() : root.clipboard = factory() }("undefined" != typeof self ? self : this, function() {
    return function(modules) { var installedModules = {};

        function __webpack_require__(moduleId) { if (installedModules[moduleId]) return installedModules[moduleId].exports; var module = installedModules[moduleId] = { i: moduleId, l: !1, exports: {} }; return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports } return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) { __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, { enumerable: !0, get: getter }) }, __webpack_require__.r = function(exports) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(exports, "__esModule", { value: !0 }) }, __webpack_require__.t = function(value, mode) { if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value; if (4 & mode && "object" == typeof value && value && value.__esModule) return value; var ns = Object.create(null); if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", { enumerable: !0, value: value }), 2 & mode && "string" != typeof value)
                for (var key in value) __webpack_require__.d(ns, key, function(key) { return value[key] }.bind(null, key)); return ns }, __webpack_require__.n = function(module) { var getter = module && module.__esModule ? function() { return module.default } : function() { return module }; return __webpack_require__.d(getter, "a", getter), getter }, __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property) }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 2) }([function(module, exports, __webpack_require__) { "use strict"; var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) { return new(P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) { try { step(generator.next(value)) } catch (e) { reject(e) } }

                    function rejected(value) { try { step(generator.throw(value)) } catch (e) { reject(e) } }

                    function step(result) { result.done ? resolve(result.value) : new P(function(resolve) { resolve(result.value) }).then(fulfilled, rejected) }
                    step((generator = generator.apply(thisArg, _arguments || [])).next()) }) },
            __generator = this && this.__generator || function(thisArg, body) { var f, y, t, g, _ = { label: 0, sent: function() { if (1 & t[0]) throw t[1]; return t[1] }, trys: [], ops: [] }; return g = { next: verb(0), throw: verb(1), return: verb(2) }, "function" == typeof Symbol && (g[Symbol.iterator] = function() { return this }), g;

                function verb(n) { return function(v) { return function(op) { if (f) throw new TypeError("Generator is already executing."); for (; _;) try { if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t; switch (y = 0, t && (op = [2 & op[0], t.value]), op[0]) {
                                    case 0:
                                    case 1:
                                        t = op; break;
                                    case 4:
                                        return _.label++, { value: op[1], done: !1 };
                                    case 5:
                                        _.label++, y = op[1], op = [0]; continue;
                                    case 7:
                                        op = _.ops.pop(), _.trys.pop(); continue;
                                    default:
                                        if (!(t = (t = _.trys).length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) { _ = 0; continue } if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) { _.label = op[1]; break } if (6 === op[0] && _.label < t[1]) { _.label = t[1], t = op; break } if (t && _.label < t[2]) { _.label = t[2], _.ops.push(op); break }
                                        t[2] && _.ops.pop(), _.trys.pop(); continue }
                                op = body.call(thisArg, _) } catch (e) { op = [6, e], y = 0 } finally { f = t = 0 }
                            if (5 & op[0]) throw op[1]; return { value: op[0] ? op[1] : void 0, done: !0 } }([n, v]) } } };
        Object.defineProperty(exports, "__esModule", { value: !0 }); var DT_1 = __webpack_require__(1);
        exports.DT = DT_1.DT; var debugLog = function(s) {},
            showWarnings = !0,
            warn = function() {
                (console.warn || console.log).apply(console, arguments) }.bind("[clipboard-polyfill]"),
            TEXT_PLAIN = "text/plain";

        function setDebugLog(f) { debugLog = f }

        function suppressWarnings() { showWarnings = !1, DT_1.suppressDTWarnings() }

        function write(data) { return __awaiter(this, void 0, void 0, function() { var text; return __generator(this, function(_a) { if (showWarnings && !data.getData(TEXT_PLAIN) && warn("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."), seemToBeInIE()) { if (function(data) { var text = data.getData(TEXT_PLAIN); if (void 0 !== text) return window.clipboardData.setData("Text", text); throw "No `text/plain` value was specified." }(data)) return [2]; throw "Copying failed, possibly because the user rejected it." } if (execCopy(data)) return debugLog("regular execCopy worked"), [2]; if (navigator.userAgent.indexOf("Edge") > -1) return debugLog('UA "Edge" => assuming success'), [2]; if (copyUsingTempSelection(document.body, data)) return debugLog("copyUsingTempSelection worked"), [2]; if (function(data) { var tempElem = document.createElement("div");
                            tempElem.setAttribute("style", "-webkit-user-select: text !important"), tempElem.textContent = "temporary element", document.body.appendChild(tempElem); var success = copyUsingTempSelection(tempElem, data); return document.body.removeChild(tempElem), success }(data)) return debugLog("copyUsingTempElem worked"), [2]; if (void 0 !== (text = data.getData(TEXT_PLAIN)) && function(str) { debugLog("copyTextUsingDOM"); var tempElem = document.createElement("div");
                            tempElem.setAttribute("style", "-webkit-user-select: text !important"); var spanParent = tempElem;
                            tempElem.attachShadow && (debugLog("Using shadow DOM."), spanParent = tempElem.attachShadow({ mode: "open" })); var span = document.createElement("span");
                            span.innerText = str, spanParent.appendChild(span), document.body.appendChild(tempElem), selectionSet(span); var result = document.execCommand("copy"); return selectionClear(), document.body.removeChild(tempElem), result }(text)) return debugLog("copyTextUsingDOM worked"), [2]; throw "Copy command failed." }) }) }

        function writeText(s) { return __awaiter(this, void 0, void 0, function() { return __generator(this, function(_a) { return navigator.clipboard && navigator.clipboard.writeText ? (debugLog("Using `navigator.clipboard.writeText()`."), [2, navigator.clipboard.writeText(s)]) : [2, write(DTFromText(s))] }) }) }

        function read() { return __awaiter(this, void 0, void 0, function() { var _a; return __generator(this, function(_b) { switch (_b.label) {
                        case 0:
                            return _a = DTFromText, [4, readText()];
                        case 1:
                            return [2, _a.apply(void 0, [_b.sent()])] } }) }) }

        function readText() { return __awaiter(this, void 0, void 0, function() { return __generator(this, function(_a) { if (navigator.clipboard && navigator.clipboard.readText) return debugLog("Using `navigator.clipboard.readText()`."), [2, navigator.clipboard.readText()]; if (seemToBeInIE()) return debugLog("Reading text using IE strategy."), [2, function() { return __awaiter(this, void 0, void 0, function() { var text; return __generator(this, function(_a) { if ("" === (text = window.clipboardData.getData("Text"))) throw "Empty clipboard or could not read plain text from clipboard"; return [2, text] }) }) }()]; throw "Read is not supported in your browser." }) }) }
        exports.setDebugLog = setDebugLog, exports.suppressWarnings = suppressWarnings, exports.write = write, exports.writeText = writeText, exports.read = read, exports.readText = readText; var useStarShown = !1;

        function useStar() { useStarShown || (showWarnings && warn('You are using the deprecated default object of `clipboard-polyfill`. Please switch to `import * as clipboard from "clipboard-polyfill"` and see https://github.com/lgarron/clipboard-polyfill/issues/101 for more info.'), useStarShown = !0) } var ClipboardPolyfillDefault = function() {
            function ClipboardPolyfillDefault() {} return ClipboardPolyfillDefault.setDebugLog = function(f) { return useStar(), setDebugLog(f) }, ClipboardPolyfillDefault.suppressWarnings = function() { return useStar(), suppressWarnings() }, ClipboardPolyfillDefault.write = function(data) { return __awaiter(this, void 0, void 0, function() { return __generator(this, function(_a) { return useStar(), [2, write(data)] }) }) }, ClipboardPolyfillDefault.writeText = function(s) { return __awaiter(this, void 0, void 0, function() { return __generator(this, function(_a) { return useStar(), [2, writeText(s)] }) }) }, ClipboardPolyfillDefault.read = function() { return __awaiter(this, void 0, void 0, function() { return __generator(this, function(_a) { return useStar(), [2, read()] }) }) }, ClipboardPolyfillDefault.readText = function() { return __awaiter(this, void 0, void 0, function() { return __generator(this, function(_a) { return useStar(), [2, readText()] }) }) }, ClipboardPolyfillDefault.DT = DT_1.DT, ClipboardPolyfillDefault }();
        exports.default = ClipboardPolyfillDefault; var FallbackTracker = function() { return function() { this.success = !1 } }();

        function execCopy(data) { var tracker = new FallbackTracker,
                listener = function(tracker, data, e) { debugLog("listener called"), tracker.success = !0, data.forEach(function(value, key) { e.clipboardData.setData(key, value), key === TEXT_PLAIN && e.clipboardData.getData(key) != value && (debugLog("setting text/plain failed"), tracker.success = !1) }), e.preventDefault() }.bind(this, tracker, data);
            document.addEventListener("copy", listener); try { document.execCommand("copy") } finally { document.removeEventListener("copy", listener) } return tracker.success }

        function copyUsingTempSelection(e, data) { selectionSet(e); var success = execCopy(data); return selectionClear(), success }

        function selectionSet(elem) { var sel = document.getSelection(); if (sel) { var range = document.createRange();
                range.selectNodeContents(elem), sel.removeAllRanges(), sel.addRange(range) } }

        function selectionClear() { var sel = document.getSelection();
            sel && sel.removeAllRanges() }

        function DTFromText(s) { var dt = new DT_1.DT; return dt.setData(TEXT_PLAIN, s), dt }

        function seemToBeInIE() { return "undefined" == typeof ClipboardEvent && void 0 !== window.clipboardData && void 0 !== window.clipboardData.setData } }, function(module, exports, __webpack_require__) { "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }); var dataTypes = ["text/plain", "text/html"],
            warn = function() {
                (console.warn || console.log).call(arguments) }.bind(console, "[clipboard-polyfill]"),
            showWarnings = !0;
        exports.suppressDTWarnings = function() { showWarnings = !1 }; var DT = function() {
            function DT() { this.m = {} } return DT.prototype.setData = function(type, value) { showWarnings && -1 === dataTypes.indexOf(type) && warn("Unknown data type: " + type, "Call clipboard.suppressWarnings() to suppress this warning."), this.m[type] = value }, DT.prototype.getData = function(type) { return this.m[type] }, DT.prototype.forEach = function(f) { for (var k in this.m) f(this.m[k], k) }, DT }();
        exports.DT = DT }, function(module, exports, __webpack_require__) { module.exports = __webpack_require__(3) }, function(module, exports, __webpack_require__) { "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }), __webpack_require__(4),
            function(m) { for (var p in m) exports.hasOwnProperty(p) || (exports[p] = m[p]) }(__webpack_require__(0)) }, function(module, exports, __webpack_require__) {
        (function(process, global) {
            /*!
             * @overview es6-promise - a tiny implementation of Promises/A+.
             * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
             * @license   Licensed under MIT license
             *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
             * @version   v4.2.5+7f2b526d
             */
            ! function(global, factory) { module.exports = factory() }(0, function() { "use strict";

                function isFunction(x) { return "function" == typeof x } var isArray = Array.isArray ? Array.isArray : function(x) { return "[object Array]" === Object.prototype.toString.call(x) },
                    len = 0,
                    vertxNext = void 0,
                    customSchedulerFn = void 0,
                    asap = function(callback, arg) { queue[len] = callback, queue[len + 1] = arg, 2 === (len += 2) && (customSchedulerFn ? customSchedulerFn(flush) : scheduleFlush()) }; var browserWindow = "undefined" != typeof window ? window : void 0,
                    browserGlobal = browserWindow || {},
                    BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver,
                    isNode = "undefined" == typeof self && void 0 !== process && "[object process]" === {}.toString.call(process),
                    isWorker = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                function useSetTimeout() { var globalSetTimeout = setTimeout; return function() { return globalSetTimeout(flush, 1) } } var queue = new Array(1e3);

                function flush() { for (var i = 0; i < len; i += 2) {
                        (0, queue[i])(queue[i + 1]), queue[i] = void 0, queue[i + 1] = void 0 }
                    len = 0 } var scheduleFlush = void 0;

                function then(onFulfillment, onRejection) { var parent = this,
                        child = new this.constructor(noop);
                    void 0 === child[PROMISE_ID] && makePromise(child); var _state = parent._state; if (_state) { var callback = arguments[_state - 1];
                        asap(function() { return invokeCallback(_state, child, callback, parent._result) }) } else subscribe(parent, child, onFulfillment, onRejection); return child }

                function resolve$1(object) { if (object && "object" == typeof object && object.constructor === this) return object; var promise = new this(noop); return resolve(promise, object), promise }
                scheduleFlush = isNode ? function() { return process.nextTick(flush) } : BrowserMutationObserver ? function() { var iterations = 0,
                        observer = new BrowserMutationObserver(flush),
                        node = document.createTextNode(""); return observer.observe(node, { characterData: !0 }),
                        function() { node.data = iterations = ++iterations % 2 } }() : isWorker ? function() { var channel = new MessageChannel; return channel.port1.onmessage = flush,
                        function() { return channel.port2.postMessage(0) } }() : void 0 === browserWindow ? function() { try { var vertx = Function("return this")().require("vertx"); return void 0 !== (vertxNext = vertx.runOnLoop || vertx.runOnContext) ? function() { vertxNext(flush) } : useSetTimeout() } catch (e) { return useSetTimeout() } }() : useSetTimeout(); var PROMISE_ID = Math.random().toString(36).substring(2);

                function noop() {} var PENDING = void 0,
                    FULFILLED = 1,
                    REJECTED = 2,
                    TRY_CATCH_ERROR = { error: null };

                function getThen(promise) { try { return promise.then } catch (error) { return TRY_CATCH_ERROR.error = error, TRY_CATCH_ERROR } }

                function handleMaybeThenable(promise, maybeThenable, then$$1) { maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1 ? function(promise, thenable) { thenable._state === FULFILLED ? fulfill(promise, thenable._result) : thenable._state === REJECTED ? reject(promise, thenable._result) : subscribe(thenable, void 0, function(value) { return resolve(promise, value) }, function(reason) { return reject(promise, reason) }) }(promise, maybeThenable) : then$$1 === TRY_CATCH_ERROR ? (reject(promise, TRY_CATCH_ERROR.error), TRY_CATCH_ERROR.error = null) : void 0 === then$$1 ? fulfill(promise, maybeThenable) : isFunction(then$$1) ? function(promise, thenable, then$$1) { asap(function(promise) { var sealed = !1,
                                error = function(then$$1, value, fulfillmentHandler, rejectionHandler) { try { then$$1.call(value, fulfillmentHandler, rejectionHandler) } catch (e) { return e } }(then$$1, thenable, function(value) { sealed || (sealed = !0, thenable !== value ? resolve(promise, value) : fulfill(promise, value)) }, function(reason) { sealed || (sealed = !0, reject(promise, reason)) }, promise._label);!sealed && error && (sealed = !0, reject(promise, error)) }, promise) }(promise, maybeThenable, then$$1) : fulfill(promise, maybeThenable) }

                function resolve(promise, value) { promise === value ? reject(promise, new TypeError("You cannot resolve a promise with itself")) : ! function(x) { var type = typeof x; return null !== x && ("object" === type || "function" === type) }(value) ? fulfill(promise, value) : handleMaybeThenable(promise, value, getThen(value)) }

                function publishRejection(promise) { promise._onerror && promise._onerror(promise._result), publish(promise) }

                function fulfill(promise, value) { promise._state === PENDING && (promise._result = value, promise._state = FULFILLED, 0 !== promise._subscribers.length && asap(publish, promise)) }

                function reject(promise, reason) { promise._state === PENDING && (promise._state = REJECTED, promise._result = reason, asap(publishRejection, promise)) }

                function subscribe(parent, child, onFulfillment, onRejection) { var _subscribers = parent._subscribers,
                        length = _subscribers.length;
                    parent._onerror = null, _subscribers[length] = child, _subscribers[length + FULFILLED] = onFulfillment, _subscribers[length + REJECTED] = onRejection, 0 === length && parent._state && asap(publish, parent) }

                function publish(promise) { var subscribers = promise._subscribers,
                        settled = promise._state; if (0 !== subscribers.length) { for (var child = void 0, callback = void 0, detail = promise._result, i = 0; i < subscribers.length; i += 3) child = subscribers[i], callback = subscribers[i + settled], child ? invokeCallback(settled, child, callback, detail) : callback(detail);
                        promise._subscribers.length = 0 } }

                function invokeCallback(settled, promise, callback, detail) { var hasCallback = isFunction(callback),
                        value = void 0,
                        error = void 0,
                        succeeded = void 0,
                        failed = void 0; if (hasCallback) { if ((value = function(callback, detail) { try { return callback(detail) } catch (e) { return TRY_CATCH_ERROR.error = e, TRY_CATCH_ERROR } }(callback, detail)) === TRY_CATCH_ERROR ? (failed = !0, error = value.error, value.error = null) : succeeded = !0, promise === value) return void reject(promise, new TypeError("A promises callback cannot return that same promise.")) } else value = detail, succeeded = !0;
                    promise._state !== PENDING || (hasCallback && succeeded ? resolve(promise, value) : failed ? reject(promise, error) : settled === FULFILLED ? fulfill(promise, value) : settled === REJECTED && reject(promise, value)) } var id = 0;

                function makePromise(promise) { promise[PROMISE_ID] = id++, promise._state = void 0, promise._result = void 0, promise._subscribers = [] } var Enumerator = function() {
                    function Enumerator(Constructor, input) { this._instanceConstructor = Constructor, this.promise = new Constructor(noop), this.promise[PROMISE_ID] || makePromise(this.promise), isArray(input) ? (this.length = input.length, this._remaining = input.length, this._result = new Array(this.length), 0 === this.length ? fulfill(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(input), 0 === this._remaining && fulfill(this.promise, this._result))) : reject(this.promise, new Error("Array Methods must be provided an Array")) } return Enumerator.prototype._enumerate = function(input) { for (var i = 0; this._state === PENDING && i < input.length; i++) this._eachEntry(input[i], i) }, Enumerator.prototype._eachEntry = function(entry, i) { var c = this._instanceConstructor,
                            resolve$$1 = c.resolve; if (resolve$$1 === resolve$1) { var _then = getThen(entry); if (_then === then && entry._state !== PENDING) this._settledAt(entry._state, i, entry._result);
                            else if ("function" != typeof _then) this._remaining--, this._result[i] = entry;
                            else if (c === Promise$2) { var promise = new c(noop);
                                handleMaybeThenable(promise, entry, _then), this._willSettleAt(promise, i) } else this._willSettleAt(new c(function(resolve$$1) { return resolve$$1(entry) }), i) } else this._willSettleAt(resolve$$1(entry), i) }, Enumerator.prototype._settledAt = function(state, i, value) { var promise = this.promise;
                        promise._state === PENDING && (this._remaining--, state === REJECTED ? reject(promise, value) : this._result[i] = value), 0 === this._remaining && fulfill(promise, this._result) }, Enumerator.prototype._willSettleAt = function(promise, i) { var enumerator = this;
                        subscribe(promise, void 0, function(value) { return enumerator._settledAt(FULFILLED, i, value) }, function(reason) { return enumerator._settledAt(REJECTED, i, reason) }) }, Enumerator }(); var Promise$2 = function() {
                    function Promise(resolver) { this[PROMISE_ID] = id++, this._result = this._state = void 0, this._subscribers = [], noop !== resolver && ("function" != typeof resolver && function() { throw new TypeError("You must pass a resolver function as the first argument to the promise constructor") }(), this instanceof Promise ? function(promise, resolver) { try { resolver(function(value) { resolve(promise, value) }, function(reason) { reject(promise, reason) }) } catch (e) { reject(promise, e) } }(this, resolver) : function() { throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.") }()) } return Promise.prototype.catch = function(onRejection) { return this.then(null, onRejection) }, Promise.prototype.finally = function(callback) { var constructor = this.constructor; return isFunction(callback) ? this.then(function(value) { return constructor.resolve(callback()).then(function() { return value }) }, function(reason) { return constructor.resolve(callback()).then(function() { throw reason }) }) : this.then(callback, callback) }, Promise }(); return Promise$2.prototype.then = then, Promise$2.all = function(entries) { return new Enumerator(this, entries).promise }, Promise$2.race = function(entries) { var Constructor = this; return isArray(entries) ? new Constructor(function(resolve, reject) { for (var length = entries.length, i = 0; i < length; i++) Constructor.resolve(entries[i]).then(resolve, reject) }) : new Constructor(function(_, reject) { return reject(new TypeError("You must pass an array to race.")) }) }, Promise$2.resolve = resolve$1, Promise$2.reject = function(reason) { var promise = new this(noop); return reject(promise, reason), promise }, Promise$2._setScheduler = function(scheduleFn) { customSchedulerFn = scheduleFn }, Promise$2._setAsap = function(asapFn) { asap = asapFn }, Promise$2._asap = asap, Promise$2.polyfill = function() { var local = void 0; if (void 0 !== global) local = global;
                    else if ("undefined" != typeof self) local = self;
                    else try { local = Function("return this")() } catch (e) { throw new Error("polyfill failed because global object is unavailable in this environment") }
                    var P = local.Promise; if (P) { var promiseToString = null; try { promiseToString = Object.prototype.toString.call(P.resolve()) } catch (e) {} if ("[object Promise]" === promiseToString && !P.cast) return }
                    local.Promise = Promise$2 }, Promise$2.Promise = Promise$2, Promise$2.polyfill(), Promise$2 })
        }).call(this, __webpack_require__(5), __webpack_require__(6))
    }, function(module, exports) { var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};

        function defaultSetTimout() { throw new Error("setTimeout has not been defined") }

        function defaultClearTimeout() { throw new Error("clearTimeout has not been defined") }

        function runTimeout(fun) { if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0); if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, setTimeout(fun, 0); try { return cachedSetTimeout(fun, 0) } catch (e) { try { return cachedSetTimeout.call(null, fun, 0) } catch (e) { return cachedSetTimeout.call(this, fun, 0) } } }! function() { try { cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout } catch (e) { cachedSetTimeout = defaultSetTimout } try { cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout } catch (e) { cachedClearTimeout = defaultClearTimeout } }(); var currentQueue, queue = [],
            draining = !1,
            queueIndex = -1;

        function cleanUpNextTick() { draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, queue.length && drainQueue()) }

        function drainQueue() { if (!draining) { var timeout = runTimeout(cleanUpNextTick);
                draining = !0; for (var len = queue.length; len;) { for (currentQueue = queue, queue = []; ++queueIndex < len;) currentQueue && currentQueue[queueIndex].run();
                    queueIndex = -1, len = queue.length }
                currentQueue = null, draining = !1,
                    function(marker) { if (cachedClearTimeout === clearTimeout) return clearTimeout(marker); if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, clearTimeout(marker); try { cachedClearTimeout(marker) } catch (e) { try { return cachedClearTimeout.call(null, marker) } catch (e) { return cachedClearTimeout.call(this, marker) } } }(timeout) } }

        function Item(fun, array) { this.fun = fun, this.array = array }

        function noop() {}
        process.nextTick = function(fun) { var args = new Array(arguments.length - 1); if (arguments.length > 1)
                for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
            queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue) }, Item.prototype.run = function() { this.fun.apply(null, this.array) }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], process.version = "", process.versions = {}, process.on = noop, process.addListener = noop, process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, process.emit = noop, process.prependListener = noop, process.prependOnceListener = noop, process.listeners = function(name) { return [] }, process.binding = function(name) { throw new Error("process.binding is not supported") }, process.cwd = function() { return "/" }, process.chdir = function(dir) { throw new Error("process.chdir is not supported") }, process.umask = function() { return 0 } }, function(module, exports) { var g;
        g = function() { return this }(); try { g = g || Function("return this")() || (0, eval)("this") } catch (e) { "object" == typeof window && (g = window) }
        module.exports = g }])
});
//# sourceMappingURL=clipboard-polyfill.promise.js.map
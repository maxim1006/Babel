(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var log = function log() {
  console.log("console");
};

exports["default"] = log;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = require("./default");

var _default2 = _interopRequireDefault(_default);

(0, _default2["default"])();

},{"./default":1}],3:[function(require,module,exports){
'use strict';

require('./features/modules/import');

},{"./features/modules/import":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Qcm9qZWN0cy9CYWJlbC9jbGllbnQvYXBwL2ZlYXR1cmVzL21vZHVsZXMvZGVmYXVsdC5qcyIsIkM6L1Byb2plY3RzL0JhYmVsL2NsaWVudC9hcHAvZmVhdHVyZXMvbW9kdWxlcy9pbXBvcnQuanMiLCJDOi9Qcm9qZWN0cy9CYWJlbC9jbGllbnQvYXBwL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBLElBQUksR0FBRyxHQUFHLFNBQU4sR0FBRyxHQUFTO0FBQUMsU0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtDQUFDLENBQUM7O3FCQUUxQixHQUFHOzs7Ozs7Ozt1QkNhRixXQUFXOzs7O0FBQzNCLDJCQUFLLENBQUM7OztBQ2hCTixZQUFZLENBQUM7O0FBY2IsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IGxvZyA9ICgpID0+IHtjb25zb2xlLmxvZyhcImNvbnNvbGVcIil9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9nO1xyXG5cclxuIiwiLypcclxuaW1wb3J0IHtvbmUgYXMgT05FLCBUV08gYXMgdHdvfSBmcm9tIFwiLi9leHBvcnRcIjtcclxuXHJcbmNvbnNvbGUubG9nKE9ORSk7XHJcbmNvbnNvbGUubG9nKHR3byk7XHJcbiovXHJcblxyXG5cclxuXHJcbi8qXHJcbmltcG9ydCAqIGFzIG51bWJlcnMgZnJvbSBcIi4vZXhwb3J0XCI7XHJcbmNvbnNvbGUubG9nKGAke251bWJlcnMub25lfSAke251bWJlcnMuVFdPfWApOyovXHJcblxyXG5cclxuXHJcbmltcG9ydCBsb2cgZnJvbSBcIi4vZGVmYXVsdFwiO1xyXG5sb2coKTsiLCIndXNlIHN0cmljdCc7XG5cbi8vcmVxdWlyZSgnYmFiZWwvcG9seWZpbGwnKTsgLy/QvdGD0LbQvdC+INC00LvRjyDQs9C10L3QtdGA0LDRgtC+0YDQvtCyXG5cbi8vcmVxdWlyZSgnLi9mZWF0dXJlcy9sZXQtY29uc3QnKTtcbi8vcmVxdWlyZSgnLi9mZWF0dXJlcy9kZXN0cnVjdHVyaW5nJyk7XG4vL3JlcXVpcmUoJy4vZmVhdHVyZXMvZnVuY3Rpb25zJyk7XG4vL3JlcXVpcmUoJy4vZmVhdHVyZXMvc3RyaW5nJyk7XG4vL3JlcXVpcmUoJy4vZmVhdHVyZXMvb2JqZWN0cycpO1xuLy9yZXF1aXJlKCcuL2ZlYXR1cmVzL2NsYXNzJyk7XG4vL3JlcXVpcmUoJy4vZmVhdHVyZXMvaXRlcmF0b3InKTtcbi8vcmVxdWlyZSgnLi9mZWF0dXJlcy9wcm9taXNlJyk7XG4vL3JlcXVpcmUoJy4vZmVhdHVyZXMvZ2VuZXJhdG9ycycpO1xuXG5yZXF1aXJlKCcuL2ZlYXR1cmVzL21vZHVsZXMvaW1wb3J0Jyk7XG5cblxuXG5cbiJdfQ==

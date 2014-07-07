(function() {
  if (!(window.console && console.log)) {
    (function() {
      var console, length, methods, noop;
      noop = function() {};
      methods = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "markTimeline", "table", "time", "timeEnd", "timeStamp", "trace", "warn"];
      length = methods.length;
      console = window.console = {};
      while (length--) {
        console[methods[length]] = noop;
      }
    })();
  }

}).call(this);

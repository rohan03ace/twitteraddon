/**
 * StockQuoteMonitor namespace.
 */
if ("undefined" == typeof(StockQuoteMonitor)) {
  var StockQuoteMonitor = {};
};

/**
 * Controls the browser overlay for the Stock Quote Monitor extension.
 */
StockQuoteMonitor.BrowserOverlay = {
  /**
   * Says 'Hello' to the user.
   */
  sayHello : function(aEvent) {
    let stringBundle = document.getElementById("stockquotemonitor-string-bundle");
    let message = stringBundle.getString("stockquotemonitor.greeting.label");

    window.alert(message);
  }
};

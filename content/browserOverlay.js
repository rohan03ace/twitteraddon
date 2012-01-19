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


StockQuoteMonitor.Service = {
  /**
  * Get The Data From The Remote Service
  */
  getQuoteData : function() {
	var url = "http://localhost:8080/StockQuoteServlet";
	var request = Components.classes["@mozilla.org/xmlextras/xmlhttprequest;1"]  
				.createInstance(Components.interfaces.nsIXMLHttpRequest);
	request.onload = function(aEvent) {  
	   window.alert("Response Text: " + aEvent.target.responseText);  
	};  
	request.onerror = function(aEvent) {  
	   window.alert("Error Status: " + aEvent.target.status);  
	};  
	request.open("GET", url, true);  
	request.send(null);
  }
};
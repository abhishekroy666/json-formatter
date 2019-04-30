// author : abhishek.roy
//----------------------------------------CODE START------------------------------------------------//
document.addEventListener('DOMContentLoaded', function () {	
	var jsonButton = document.getElementById("json");
	var textButton = document.getElementById("text");
	
	jsonButton.addEventListener('click', clickJsonButton);
	textButton.addEventListener('click', clickTextButton);
});

//----------------------------------------CODE END------------------------------------------------//

//----------------------------------------FUNCTIONS------------------------------------------------//

/**
 *  * @param {*} e : event
 *  executes when said event is fired
 *  injects CSS + loads and executes JS ---> on current-tab DOM
 */
function clickJsonButton(event){
	chrome.tabs.insertCSS(null, { file: "css/bootstrap.min.css" });
	chrome.tabs.executeScript(null, {file: "js/jquery-3.4.0.js"});
	chrome.tabs.executeScript(null, { file : "js/format-to-json.js" });
	window.close();
}

/**
 *  * @param {*} e : event
 *  executes when said event is fired
 *  refreshes the browser tab to load default text/JSON
 */
function clickTextButton(event){
	chrome.tabs.executeScript(null, { code : "window.location = window.location.href;" });
	window.close();
}

//----------------------------------------XXXXXXXXXX------------------------------------------------//
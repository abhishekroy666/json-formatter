
function clickJsonButton(e){
	chrome.tabs.insertCSS(null, { file: "css/bootstrap.min.css" });
	chrome.tabs.executeScript(null, {file: "js/jquery-3.4.0.js"});
	chrome.tabs.executeScript(null, { file : "js/format-to-json.js" });
	window.close();
}

function clickTextButton(e){
	chrome.tabs.executeScript(null, { code : "window.location = window.location.href;" });
	window.close();
}

document.addEventListener('DOMContentLoaded', function () {	
	var jsonButton = document.getElementById("json");
	var textButton = document.getElementById("text");
	
	jsonButton.addEventListener('click', clickJsonButton);
	textButton.addEventListener('click', clickTextButton);
});


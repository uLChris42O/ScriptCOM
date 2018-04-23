
function onExecutedInjectContent(result)
{
	console.log("tab injection succesful.");
}

function onErrorInjectContentScript(error) 
{	
	console.log(`Error failed injecting content script to tab: ${error}`);
}

function logTabs(tabs) 
{
	console.log("Querying tabs");
	for (let tab of tabs) 
	{
		var parsedUrl = new URL(tab.url);
		if(!parsedUrl.hostname.includes("mozilla.org") && parsedUrl.hostname != "")
		{
			console.log("Attempting to load content-script.js to tabid: " + tab.id + " url: " + parsedUrl.hostname);
		
			var executing = browser.tabs.executeScript(
			tab.id, {
				file: "/content-script.js"
			});

			executing.then(onExecutedInjectContent, onErrorInjectContentScript);
		}
	}
}

function onErrorGetAllTabs(error)
{
	console.log(`Error getting tabs: ${error}`);
}

var querying = browser.tabs.query({});

querying.then(logTabs, onErrorGetAllTabs);

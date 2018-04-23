console.log("Debug 1 breakpoint");
(function() 
{
	console.log("Debug 2 breakpoint");
	
	if (window.hasRun) 
	{
		return;
	}
	
	window.hasRun = true;

	console.log("Debug 3 breakpoint");
})();
console.log("Debug 4 breakpoint");
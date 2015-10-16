var formated = false;
var video2 = [];
var onNetflix,
	onYoutube;
var oldStyle = {
	"height":0,
	"width":0,
	"top":0
};

$(document).ready(	function(){
	console.log("initialise");
	var a = window.location.host;
	var b = a.split(".");
	onNetflix = ((b[1] + "." + b[2]) == 'netflix.com');
	onYoutube = ((b[1] + "." + b[2]) == 'youtube.com');
	if(onNetflix) {
		$(document).bind('DOMNodeInserted', function(event) {
			if(event.target.nodeName == "VIDEO"){
				video2 = $("video");
				if(video2.length > 0){
					//	get old style
					oldStyle = {
						"height": video2.css("height"),
						"width": video2.css("width"),
						"top":video2.css("top")
					};
					//	add zoom button listener
					chrome.runtime.onMessage.addListener(
					  function(request, sender, sendResponse) {
					    if( request.message === "clicked_browser_action" ) {
					      	forceAR();
					    }
					  }
					);
				}
				else{
					console.log("video not found")
				}
			}
		});
	} else if(onYoutube){
		console.log("on youtube");
		$(document).bind('DOMNodeInserted', function(event) {
			if(event.target.nodeName == "VIDEO"){
				video2 = $("video");
				if(video2.length > 0){
					//	get old style
					oldStyle = {
						"height": video2.css("height"),
						"width": video2.css("width"),
						"top":video2.css("top")
					};
					//	add zoom button listener
					chrome.runtime.onMessage.addListener(
					  function(request, sender, sendResponse) {
					    if( request.message === "clicked_browser_action" ) {
					      	forceAR();
					    }
					  }
					);
				}
				else{
					console.log("video not found")
				}
			}
		});
	} else{
		console.log("site not supported");
		video2 = $("video");
		if(video2.length > 0){
			chrome.runtime.onMessage.addListener(
			  function(request, sender, sendResponse) {
			    if( request.message === "clicked_browser_action" ) {
			      	forceAR();
			    }
			  }
			);
		}
		else{
			console.log("video not found")
		}
	}
});



function forceAR(){
	if(formated == true){
		video2.css("height", oldStyle.height)
		video2.css("width", oldStyle.width)
		video2.css("top", oldStyle.top)

		formated = false
	}else if(formated == false){
		
		video2.css("height", "132%")
		video2.css("width", "100%")
		video2.css("top", "-16%")
		
		formated = true
	}	
}
$(document).ready(function(){

	$("#r").click(function(e){
		
		var getActiveElement=$(".show");
		var nextElement=getActiveElement.next();
		
		if((nextElement).length==0)
		{
			nextElement=$(".inner1 img").first();	
		}
		
		getActiveElement.removeClass("show").addClass("hide");//.css('z-index',-10);
		nextElement.removeClass("hide").addClass("show");//.css('z-index',20);
		
		$(".inner1 img").not([getActiveElement,nextElement]);//.css('z-index',1);
		
		e.preventDefault();
	
	});

	$("#l").click(function(e){
	
		var getActiveElement=$(".show");
		var nextElement=getActiveElement.prev();
		
		if((nextElement).length==0)
		{
			nextElement=$(".inner1 img").last();
		}
	
		getActiveElement.removeClass("show").addClass("hide");//.css('z-index',-10);
		nextElement.removeClass("hide").addClass("show");//.css('z-index',20);
		
		$(".inner1 img").not([getActiveElement,nextElement]);//.css('z-index',1);
		
		e.preventDefault();
	
		
	});
	
});
$(document).ready(function(){


	if ($('#highlightsbanner img').height() <= 300 ){
			
				console.log("inside 300");
	$("#left").css('visibility','hidden');
	
	$("#right").click(function(e){
		e.preventDefault();
		var marginleft=$("#inner").css("margin-left");
		marginleft=parseInt(marginleft);
		
		
		if((marginleft)>(-1550))
		{
				$("#inner").animate({
				'marginLeft' : "-=140px" 
			});
		}
		
		console.log(marginleft);
		
		if(marginleft<=0){
			$("#left").css('visibility', 'visible');
		}
		
		if(marginleft==(-1540)){
			$("#right").css('visibility', 'hidden');
		}
		
		e.preventDefault();
	});

	$("#left").click(function(e){
	
		e.preventDefault();
		$("#right").css('visibility', 'visible');
		var marginleft=$("#inner").css("margin-left");
		marginleft=parseInt(marginleft);
		
		
		if((marginleft)<(0))
		{
				$("#inner").animate({
				'marginLeft' : "+=140px" 
			});
		}
		
		console.log(marginleft);
		
		if((marginleft==(-140))){
			$("#left").css('visibility','hidden');
		}
		
	});
			}
			
			else{
				
				console.log("outside 300");
				
	$("#left").css('visibility','hidden');
	
	$("#right").click(function(e){
		e.preventDefault();
		var marginleft=$("#inner").css("margin-left");
		marginleft=parseInt(marginleft);
		
		
		if((marginleft)>(-701))
		{
				$("#inner").animate({
				'marginLeft' : "-=140px" 
			});
		}
		
		console.log(marginleft);
		
		if(marginleft<=0){
			$("#left").css('visibility', 'visible');
		}
		
		if(marginleft==(-700)){
			$("#right").css('visibility', 'hidden');
		}
		
		e.preventDefault();
	});

	$("#left").click(function(e){
	
		e.preventDefault();
		$("#right").css('visibility', 'visible');
		var marginleft=$("#inner").css("margin-left");
		marginleft=parseInt(marginleft);
		
		
		if((marginleft)<(0))
		{
				$("#inner").animate({
				'marginLeft' : "+=140px" 
			});
		}
		
		console.log(marginleft);
		
		if((marginleft==(-140))){
			$("#left").css('visibility','hidden');
		}
		
	});
				
			}



	
});
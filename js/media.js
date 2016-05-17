$(document).ready(function(){

	$('.play').hover(vid1,vid2);
	
	$("#left").css('visibility','hidden');
	
	$("#ri").click(function(e){
		e.preventDefault();
		var marginleft=$("#mc").css("margin-left");
		marginleft=parseInt(marginleft);
		
		
		if((marginleft)>(-1000))
		{
				$("#mc").animate({
				'marginLeft' : "-=210px" 
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

	$("#le").click(function(e){
	
		e.preventDefault();
		$("#ri").css('visibility', 'visible');
		var marginleft=$("#mc").css("margin-left");
		marginleft=parseInt(marginleft);
		
		
		if((marginleft)<(0))
		{
				$("#mc").animate({
				'marginLeft' : "+=210px" 
			});
		}
		
		console.log(marginleft);
		
		if((marginleft==(-140))){
			$("#left").css('visibility','hidden');
		}
		
		});
		
	});
	
	
function vid1(){
	console.log($(this));
	var id=$(this).data('target');
	console.log(id);
	$(id).removeClass('hideplay').addClass('showplay');

}

function vid2(){
	console.log($(this));
	var id=$(this).data('target');
	$(id).removeClass('showplay').addClass('hideplay');
}
$(document).ready(function(){

	$("#menu").click(function(e){
		$(".navbar").toggle().css({"margin-left":"0"});;
		
	});

	$("#overlay").click(function(e){
		$(".navbar").css({"margin-left":"-1000px"});
	});
	
});
$(document).ready(function() {

	$(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 550;
			 if ($(window).scrollTop() > navHeight) {
				 $('.dropdowns').addClass('fixed');
			 }
			 else {
				 $('.dropdowns').removeClass('fixed');
			 }
		});

	$(function() {
		$(".rslides").responsiveSlides({
			 timeout: 7000, 
			 speed:1500
		});
	 });
	
	
	$('.dropdowncon').hover(handlerIn, handlerOut);
	
	$('#share').hover(shareOn,shareOff);
	$('.sharenews').hover(shareOn1,shareOff1);
	$('.hideshow').hover(color,bw);
	
	$("#searchopen").click(function(){
			$("#searchdiv").toggle();
		});
	$("#searchclose").click(function(){
				$("#searchdiv").hide();
		});
		
	
	
	$('#click').on('click',function(){
		if($('#matchsummary').css('display')!='none'){
			$('#matchsummary2').show().siblings('div').hide();
		}else if($('#matchsummary2').css('display')!='none'){
		$('#matchsummary2').show().siblings('div').hide();
      }
	});
	
});


if ( $( this ).hasClass( "show" ) ) {
			
		}

function handlerIn() {
	//console.log($(this));
	$('.dropdown-content').removeClass('active');
	var id = $(this).data('target'); // #football
	$(id).addClass('active');
	
}

function handlerOut() {
	//console.log($(this));
	var id = $(this).data('target'); // #football
	$(id).removeClass('active');
}

function shareOn() {
	console.log($(this));	
	$('.sharebar').addClass('active');
}

function shareOff() {
	console.log($(this));	
	$('.sharebar').removeClass('active');
}

function shareOn1() {
	console.log($(this));
	var id=$(this).data('target');
	console.log(id);
	$(id).addClass('active');
	$(id).css('background-color','#F6F6F6');
}

function shareOff1() {
	console.log($(this));
	var id=$(this).data('target');
	$(id).removeClass('active');
}

function color() {
	console.log($(this));
	var id=$(this).data('target');
	$(id).removeClass('ds');
}

function bw() {
	console.log($(this));
	var id = $(this).data('target')
	$(id).addClass('ds');
}


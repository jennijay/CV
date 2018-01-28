$(document).ready(function() {
	
	$('.otsikko.hidden').fadeIn(1500).removeClass('hidden');
	
	$('.mina.hidden').fadeIn(2000).removeClass('hidden');
	
	$('.koulutus.hidden').fadeIn(2500).removeClass('hidden');
	
	$('.tyokokemus.hidden').fadeIn(3000).removeClass('hidden');

	$('.muuta.hidden').fadeIn(3500).removeClass('hidden');

	$('.yhteystiedot.hidden').fadeIn(4000).removeClass('hidden');
    
    $(window).scroll(function(){
    	
    	$(".otsikko").css("opacity", 1 - $(window).scrollTop() / 250);
    	 
  	 });
 
});




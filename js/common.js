$(function() {

	$("ul.sf-menu").superfish({
		cssArrows: true,
		delay:300,
		speed:'slow', 
	});
	$('.slider-midl').slick({
		dots: true,
		prevArrow: $('.slider-prew'),
		nextArrow: $('.slider-next'),
		
	  });
	$('.new-items').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 3,
		prevArrow: $('.slider-prew-new'),
		nextArrow: $('.slider-next-new')
		
		
		
	  });
	$('.Action-items').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 3,
		prevArrow: $('.slider-prew-new1'),
		nextArrow: $('.slider-next-new1')
		
		
		
	  });
		  
	
	$(".top-slider").owlCarousel({
		dots: false,
		nav: true,
		smartSpeed: 700,
		
		responsive:{
			0:{
				items: 3
			},
			800:{
				items: 3
			},
			1000:{
				items: 10
				
			}
	
		}
	
	});


	// function getTimeRemaining(endtime) {
	// 	var t = Date.parse(endtime) - Date.parse(new Date());
	// 	var seconds = Math.floor((t / 1000) % 60);
	// 	var minutes = Math.floor((t / 1000 / 60) % 60);
	// 	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	// 	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	// 	return {
	// 	  'total': t,
	// 	  'days': days,
	// 	  'hours': hours,
	// 	  'minutes': minutes,
	// 	  'seconds': seconds
	// 	};
	//   }

	
	//   $('.countdown').flipcountdown({
		
	// 	showHour:true,
	// 	showMinute:true,
		
	// 	showSecond:true,
		
	
		
	
	// 	am:false,
	
	// 	tzoneOffset:0,// offset timezone
	
	// 	speedFlip:100, // the speed of flip aniamtion
	// 	beforeDateTime: '03/24/2020 18:11:00',
		
	// 	time:function(){// set time
			
			
	// 		return new Date(
				
				
	// 		);
			
	// 		},
			
	// 		size:'xs', // Sizes. 'lg', 'md', 'sm' or ''
	
	// 		});
			
	


	$(".item-img").equalHeights();

	$(".head-block").equalHeights();
	$(".height-class").equalHeights();










	$(function(){
		var NY = Math.round((new Date('3/28/2020 18:16:00')).getTime()/1000);
		$('.countdown').flipcountdown({
		size:'xs',
		tick:function(){
		var nol = function(h){
		return h>9?h:'0'+h;
		}
		var range = NY-Math.round((new Date()).getTime()/1000),
		secday = 86400, sechour = 3600,
		days = parseInt(range/secday),
		hours = parseInt((range%secday)/sechour),
		min = parseInt(((range%secday)%sechour)/60),
		sec = ((range%secday)%sechour)%60;
		if (range <=0){
		
			document.getElementById("countdown_complete").style.visibility="hidden";
		return;
		}
		
					else{
			return nol(days)+' '+nol(hours)+' '+nol(min)+' '+nol(sec);
			document.getElementById("countdown_complete").style.visibility="hidden";}
		
		}
		});
		
		});
});

$( document ).ready(function() {
$('#left-bg .more_pro').click(
	function(){
		$('#left-bg').animate({'width': '100%'},600).siblings().animate({'width':'0'},600);
		$('#left-bg .more_pro').css('display','none');
		$('#show').css('display','block');
		$('.producttext_left').css('display','block'); 
		$('.logoarea1').css('display','none');
		$('.mainbottle_productleft').css('left','26%');
		$('.smallbottle_productleft').css('left','30%');
		$('.icecubearea').css('left','20%');
		$('.icearea').css('left','36%');
	   
  });
//Right section block
$('#right-bg .more_pro').click(
	function(){
		$('#right-bg').animate({'width': '100%'},600).siblings().animate({'width':'0'},600);
		$('#right-bg .more_pro').css('display','none');
		$('#show').css('display','block');
		$('.producttext_right').css('display','block');
		$('.logoarea2').css('display','none');
		$('.mainbottle_productright').css('right','5%');
		$('.smallbottle_productright').css('right','12%');
  });



$('#show').click(function(){
		$('#left-bg').animate(
			{'width': '50%'},600),
			$('#left-bg .more_pro').css('display','block');
			$('#left-bg .producttext_left').css('display','none');
			$('#left-bg .producttext_right').css('display','none');
			$('#left-bg .logoarea1').css('display','block');
			$('#left-bg .logoarea2').css('display','block');
			$('#left-bg .mainbottle_productleft').css('left','46%');
			$('#left-bg .smallbottle_productleft').css('left','52%');
			$('#left-bg .icecubearea').css('left','34%');
			$('#left-bg .icearea').css('left','66%');
						
		$('#right-bg').animate(
			{'width': '50%'},600),
			$('#right-bg .more_pro').css('display','block'),
			$('#right-bg .producttext_left').css('display','none'),
			$('#right-bg .producttext_right').css('display','none'),
			$('#right-bg .logoarea2').css('display','block'),
			$('#right-bg .logoarea1').css('display','block'),
			$('#right-bg .mainbottle_productright').css('right','26%'),
			$('#right-bg .smallbottle_productright').css('right','39%'),
		$(this).css('display', 'none');
});
		
   
});	
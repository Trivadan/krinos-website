$(document).ready(function(){
	$("a.single_image").fancybox({padding:4})});
$(".nav-toggle").click(function(){
	$(this).toggleClass("active");
$(".overlay-boxify").toggleClass("open")});
$(".overlay ul li a").click(function(){
	$(".nav-toggle").toggleClass("active");
$(".overlay-boxify").toggleClass("open")});
$(".overlay").click(function(){
	$(".nav-toggle").toggleClass("active");$(".overlay-boxify").toggleClass("open")});
$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=$(this.hash);e=e.length?e:
	$("[name="+this.hash.slice(1)+"]");if(e.length){$("html,body").animate({scrollTop:e.offset().top},2e3);return false}}})

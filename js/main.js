$(document).ready(function(){"use strict";var window_width=$(window).width(),window_height=window.innerHeight,header_height=$(".default-header").height(),header_height_static=$(".site-header.static").outerHeight(),fitscreen=window_height-header_height;$(".fullscreen").css("height",window_height)
$(".fitscreen").css("height",fitscreen);$(".default-header").sticky({topSpacing:0});if(document.getElementById("default-select")){$('select').niceSelect();};$('.img-pop-up').magnificPopup({type:'image',gallery:{enabled:true}});$('.active-works-carousel').owlCarousel({items:1,loop:true,margin:100,dots:true,autoplay:true,responsive:{0:{items:1},480:{items:1,},768:{items:1,}}});$('.active-testimonial').owlCarousel({items:2,loop:true,margin:20,dots:true,autoplay:true,nav:true,navText:["<span class='lnr lnr-arrow-up'></span>","<span class='lnr lnr-arrow-down'></span>"],responsive:{0:{items:1},480:{items:1,},768:{items:2,}}});$('.navbar-nav a[href*="#"]').not('[href="#"]').not('[href="#0"]').on('click',function(event){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){event.preventDefault();$('html, body').animate({scrollTop:target.offset().top-50},1000,function(){var $target=$(target);$target.focus();if($target.is(":focus")){return false;}else{$target.attr('tabindex','-1');$target.focus();};});}}});$(".skill1").DonutWidget({max:100,value:75,text:"",rotate:0,caption:"",template:['<div class="donut-hole"><span class="donut-filling"></div>','<div class="donut-bite" data-segment-index="0"></div>','<div class="donut-bite" data-segment-index="1"></div>','<div class="donut-caption-wrapper"><span class="donut-caption"></span></div>'].join(''),colors:{primary:"#8490ff",background:"#eee"},size:"large"});$(".skill2").DonutWidget({max:100,value:95,text:"",rotate:0,caption:"",template:['<div class="donut-hole"><span class="donut-filling"></div>','<div class="donut-bite" data-segment-index="0"></div>','<div class="donut-bite" data-segment-index="1"></div>','<div class="donut-caption-wrapper"><span class="donut-caption"></span></div>'].join(''),colors:{primary:"#8490ff",background:"#eee"},size:"large"});$(".skill3").DonutWidget({max:100,value:85,text:"",rotate:0,caption:"",template:['<div class="donut-hole"><span class="donut-filling"></div>','<div class="donut-bite" data-segment-index="0"></div>','<div class="donut-bite" data-segment-index="1"></div>','<div class="donut-caption-wrapper"><span class="donut-caption"></span></div>'].join(''),colors:{primary:"#8490ff",background:"#eee"},size:"large"});$(document).ready(function(){$('#mc_embed_signup').find('form').ajaxChimp();});});
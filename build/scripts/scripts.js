function initMap(){var e=document.getElementById("map");if(null!=e){var t={lat:50.4799999,lng:17.33437},l=new google.maps.Map(e,{zoom:9,scrollwheel:!1,disableDefaultUI:!0,center:t,styles:[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",elementType:"geometry.stroke",stylers:[{visibility:"on"},{weight:4}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}]});new google.maps.Marker({position:t,icon:pin,map:l})}}!function(e){"use strict";e.scrollTop=$(this).scrollTop(),e.updateVars=function(){e.window={x:$(window).width(),y:$(window).height()},e.scrollTop=$(window).scrollTop()},e.getWindow=function(){return e.window},e.getScrollTop=function(){return e.scrollTop}}(window.fn=window.fn||{}),$(document).ready(function(){$(".nav-bar #burger").click(function(){$(this).toggleClass("open"),$(this).next(".menu").slideToggle(50),$(this).next(".menu").toggleClass("open")}),fn.updateVars(),$(window).ready(function(){fn.updateVars(),$(window).width()<999?$("#header .menu").addClass("mobile-menu"):$("#header .menu").removeClass("mobile-menu"),fn.updateVars(),700<$(window).width()&&$(window).scroll(doParallax)}),$("#header #burger").click(function(){fn.updateVars(),$(window).width()<999&&($(this).toggleClass("open"),$(this).next(".menu").slideToggle(50),$(this).next(".menu").toggleClass("open"))}),$("#header  .menu a").click(function(){fn.updateVars(),$(window).width()<999&&($("#header #burger").toggleClass("open"),$("#header  .logo").removeClass("open"),$("#header  .menu").slideToggle(100),$("#header .menu").toggleClass("open"))}),$(window).scroll(function(){fn.updateVars(),250<fn.scrollTop?($("#header").addClass("fixed"),$("#header li").addClass("fixed")):fn.scrollTop<=250&&($("#header").removeClass("fixed"),$("#header li").removeClass("fixed"))}),$(function(){jQuery("img.svg").each(function(){var l=jQuery(this),r=l.attr("id"),o=l.attr("class"),e=l.attr("src");jQuery.get(e,function(e){var t=jQuery(e).find("svg");void 0!==r&&(t=t.attr("id",r)),void 0!==o&&(t=t.attr("class",o+" replaced-svg")),!(t=t.removeAttr("xmlns:a")).attr("viewBox")&&t.attr("height")&&t.attr("width")&&t.attr("viewBox","0 0 "+t.attr("height")+" "+t.attr("width")),l.replaceWith(t)},"xml")})}),require("gallery")(document.querySelector(".gallery"))});var images=[].slice.call(document.querySelectorAll(".js-parallax-bg"));function getViewportHeight(){var e=document.documentElement.clientHeight,t=window.innerHeight;return e<t?t:e}function getViewportScroll(){if(void 0!==window.scrollY)return window.scrollY;if("undefined"!=typeof pageYOffset)return pageYOffset;var e=document.documentElement;return(e=e.clientHeight?e:document.body).scrollTop}function doParallax(){var e,t,l,r=getViewportScroll(),o=getViewportHeight();for(var i in images)t=(e=images[i]).offsetTop,l=e.offsetHeight,r+o<t||t+l<r||(e.style.backgroundPosition="50% "+Math.round(5*(t-r)/8)+"px")}
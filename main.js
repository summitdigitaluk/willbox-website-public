"use strict";(()=>{function q(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}else return Array.from(t)}var g=!1;typeof window!="undefined"&&(v={get passive(){g=!0}},window.addEventListener("testPassive",null,v),window.removeEventListener("testPassive",null,v));var v,c=typeof window!="undefined"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),l=[],u=!1,m=-1,s=void 0,i=void 0,d=void 0,h=function(e){return l.some(function(r){return!!(r.options.allowTouchMove&&r.options.allowTouchMove(e))})},f=function(e){var r=e||window.event;return h(r.target)||r.touches.length>1?!0:(r.preventDefault&&r.preventDefault(),!1)},x=function(e){if(d===void 0){var r=!!e&&e.reserveScrollBarGap===!0,o=window.innerWidth-document.documentElement.clientWidth;if(r&&o>0){var a=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);d=document.body.style.paddingRight,document.body.style.paddingRight=a+o+"px"}}s===void 0&&(s=document.body.style.overflow,document.body.style.overflow="hidden")},A=function(){d!==void 0&&(document.body.style.paddingRight=d,d=void 0),s!==void 0&&(document.body.style.overflow=s,s=void 0)},E=function(){return window.requestAnimationFrame(function(){if(i===void 0){i={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,r=e.scrollY,o=e.scrollX,a=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-r,document.body.style.left=-o,setTimeout(function(){return window.requestAnimationFrame(function(){var n=a-window.innerHeight;n&&r>=a&&(document.body.style.top=-(r+n))})},300)}})},D=function(){if(i!==void 0){var e=-parseInt(document.body.style.top,10),r=-parseInt(document.body.style.left,10);document.body.style.position=i.position,document.body.style.top=i.top,document.body.style.left=i.left,window.scrollTo(r,e),i=void 0}},T=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},B=function(e,r){var o=e.targetTouches[0].clientY-m;return h(e.target)?!1:r&&r.scrollTop===0&&o>0||T(r)&&o<0?f(e):(e.stopPropagation(),!0)},p=function(e,r){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!l.some(function(a){return a.targetElement===e})){var o={targetElement:e,options:r||{}};l=[].concat(q(l),[o]),c?E():x(r),c&&(e.ontouchstart=function(a){a.targetTouches.length===1&&(m=a.targetTouches[0].clientY)},e.ontouchmove=function(a){a.targetTouches.length===1&&B(a,e)},u||(document.addEventListener("touchmove",f,g?{passive:!1}:void 0),u=!0))}};var y=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}l=l.filter(function(r){return r.targetElement!==e}),c&&(e.ontouchstart=null,e.ontouchmove=null,u&&l.length===0&&(document.removeEventListener("touchmove",f,g?{passive:!1}:void 0),u=!1)),c?D():A()};var I=t=>!Array.isArray(t)||!t.length;var b=()=>{let t=JSON.parse(localStorage.getItem("enquiry"));if(I(t)===!0){$('[data-enquiry="get-a-quote"]').attr("href","/complete-your-enquiry"),$('[data-enquiry="get-a-quote"] .get-a-quote').show().siblings().hide();return}let r=t.reduce((n,S)=>n+parseInt(S.qty,10),0);$('[data-enquiry="total"]').text(r);let o=t.some(n=>n.billing==="hire"),a=t.some(n=>n.billing!=="hire");o&&a?$('[data-enquiry="get-a-quote"]').attr("href","/complete-your-enquiry?reason=NewHireSalesQuote"):o?$('[data-enquiry="get-a-quote"]').attr("href","/complete-your-enquiry?reason=NewHireQuote"):$('[data-enquiry="get-a-quote"]').attr("href","/complete-your-enquiry?reason=NewSalesQuote"),$('[data-enquiry="get-a-quote"] .complete-enquiry').show().siblings().hide()};var w=()=>{$("#How-Hear-About").on("change",function(){$(this).val()==="Other; "?($("#how-hear-about-other-show-hide").removeClass("hidden"),$("#How-Hear-About-Other").prop("required",!0).attr("required"),initSmoothScrolling("#how-hear-about-other-show-hide")):($("#How-Hear-About-Other").val("").prop("required",!1).removeAttr("required"),$("#how-hear-about-other-show-hide").addClass("hidden"))})};$(document).on("click",function(t){if($(".mega-nav-button.active").length&&(!$(t.target).closest(".mega-nav-slide").length||$(t.target).closest(".mega-nav-background").length)&&(!$(t.target).closest(".mega-nav-button-inner").length||$(t.target).closest(".mega-nav-button-inner").length&&$(t.target).closest(".mega-nav-button.active").length)){console.log("Click was outside the mega nav");var e=$(".mega-nav-button.active").find(".mega-nav-slide").attr("id");$(".mega-nav-button.active").removeClass("active");var r=document.querySelector("#"+e);y(r)}else if($(".mega-nav-button.active").length&&!$(t.target).closest(".mega-nav-button.active").length&&$(t.target).closest(".mega-nav-button-inner").length){console.log("Open another mega nav"),$(t.target).closest(".mega-nav-button").addClass("active").siblings().removeClass("active"),$(t.target).closest(".mega-nav-button").find(".mega-nav-image").eq(0).css({opacity:"1"});var e=$(".mega-nav-button.active").find(".mega-nav-slide").attr("id"),r=document.querySelector("#"+e);p(r,{reserveScrollBarGap:!0})}else if(!$(t.target).closest(".mega-nav-button.active").length&&$(t.target).closest(".mega-nav-button-inner").length||!$(t.target).closest(".mega-nav-button.active").length&&$(t.target).closest(".mega-nav-button-inner").length){console.log("Open the mega nav"),$(t.target).closest(".mega-nav-button").addClass("active"),$(t.target).closest(".mega-nav-button").find(".mega-nav-image").eq(0).css({opacity:"1"});var e=$(".mega-nav-button.active").find(".mega-nav-slide").attr("id"),r=document.querySelector("#"+e);p(r,{reserveScrollBarGap:!0})}});b();w();})();

"use strict";(()=>{function W(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}else return Array.from(t)}var q=!1;typeof window!="undefined"&&(w={get passive(){q=!0}},window.addEventListener("testPassive",null,w),window.removeEventListener("testPassive",null,w));var w,p=typeof window!="undefined"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),d=[],m=!1,H=-1,f=void 0,c=void 0,g=void 0,O=function(e){return d.some(function(a){return!!(a.options.allowTouchMove&&a.options.allowTouchMove(e))})},h=function(e){var a=e||window.event;return O(a.target)||a.touches.length>1?!0:(a.preventDefault&&a.preventDefault(),!1)},R=function(e){if(g===void 0){var a=!!e&&e.reserveScrollBarGap===!0,o=window.innerWidth-document.documentElement.clientWidth;if(a&&o>0){var r=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);g=document.body.style.paddingRight,document.body.style.paddingRight=r+o+"px"}}f===void 0&&(f=document.body.style.overflow,document.body.style.overflow="hidden")},M=function(){g!==void 0&&(document.body.style.paddingRight=g,g=void 0),f!==void 0&&(document.body.style.overflow=f,f=void 0)},F=function(){return window.requestAnimationFrame(function(){if(c===void 0){c={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,a=e.scrollY,o=e.scrollX,r=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-a,document.body.style.left=-o,setTimeout(function(){return window.requestAnimationFrame(function(){var s=r-window.innerHeight;s&&a>=r&&(document.body.style.top=-(a+s))})},300)}})},U=function(){if(c!==void 0){var e=-parseInt(document.body.style.top,10),a=-parseInt(document.body.style.left,10);document.body.style.position=c.position,document.body.style.top=c.top,document.body.style.left=c.left,window.scrollTo(a,e),c=void 0}},j=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},X=function(e,a){var o=e.targetTouches[0].clientY-H;return O(e.target)?!1:a&&a.scrollTop===0&&o>0||j(a)&&o<0?h(e):(e.stopPropagation(),!0)},S=function(e,a){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!d.some(function(r){return r.targetElement===e})){var o={targetElement:e,options:a||{}};d=[].concat(W(d),[o]),p?F():R(a),p&&(e.ontouchstart=function(r){r.targetTouches.length===1&&(H=r.targetTouches[0].clientY)},e.ontouchmove=function(r){r.targetTouches.length===1&&X(r,e)},m||(document.addEventListener("touchmove",h,q?{passive:!1}:void 0),m=!0))}};var C=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}d=d.filter(function(a){return a.targetElement!==e}),p&&(e.ontouchstart=null,e.ontouchmove=null,m&&d.length===0&&(document.removeEventListener("touchmove",h,q?{passive:!1}:void 0),m=!1)),p?U():M()};var Z=t=>!Array.isArray(t)||!t.length;var N=()=>{let t=JSON.parse(localStorage.getItem("enquiry"));if(Z(t)===!0){$('[data-enquiry="get-a-quote"]').attr("href","/complete-your-enquiry"),$('[data-enquiry="get-a-quote"] .get-a-quote').show().siblings().hide();return}let a=t.reduce((s,v)=>s+parseInt(v.qty,10),0);$('[data-enquiry="total"]').text(a);let o=t.some(s=>s.billing==="hire"),r=t.some(s=>s.billing!=="hire");o&&r?$('[data-enquiry="get-a-quote"]').attr("href","/complete-your-enquiry?reason=NewHireSalesQuote"):o?$('[data-enquiry="get-a-quote"]').attr("href","/complete-your-enquiry?reason=NewHireQuote"):$('[data-enquiry="get-a-quote"]').attr("href","/complete-your-enquiry?reason=NewSalesQuote"),$('[data-enquiry="get-a-quote"] .complete-enquiry').show().siblings().hide()};var P=()=>{$("#How-Hear-About").on("change",function(){$(this).val()==="Other"?($("#how-hear-about-other-show-hide").removeClass("hidden"),$("#How-Hear-About-Other").prop("required",!0).attr("required"),Y("#how-hear-about-other-show-hide")):($("#How-Hear-About-Other").val("").prop("required",!1).removeAttr("required"),$("#how-hear-about-other-show-hide").addClass("hidden"))})};var Y=t=>{console.log($(".tab-group").length?$("#navigation").css("position")==="static"?($(".tab-group").eq(0).outerHeight(!1)+23)*-1:($("#navigation").outerHeight(!1)+$(".tab-group").eq(0).outerHeight(!1)+23)*-1:$("#navigation").css("position")==="fixed"?($("#navigation").outerHeight(!1)+23)*-1:-23);var e=700,a=location.hash?s(location.href):location.href;o();function o(){document.body.addEventListener("click",n,!1);function n(i){!r(i.target)||(i.stopPropagation(),i.preventDefault(),x(i.target.hash,{duration:e,offset:$(".tab-group").length?$("#navigation").css("position")==="static"?($(".tab-group").eq(0).outerHeight(!1)+23)*-1:($("#navigation").outerHeight(!1)+$(".tab-group").eq(0).outerHeight(!1)+23)*-1:$("#navigation").css("position")==="fixed"?($("#navigation").outerHeight(!1)+23)*-1:-23,callback:function(){v(i.target.hash)}}))}}function r(n){return n.tagName.toLowerCase()==="a"&&n.hash.length>0&&s(n.href)===a}function s(n){return n.slice(0,n.lastIndexOf("#"))}function v(n){var i=document.getElementById(n.substring(1));i&&(/^(?:a|select|input|button|textarea)$/i.test(i.tagName)||(i.tabIndex=-1))}function x(n,i){var A=window.pageYOffset,u={duration:i.duration,offset:i.offset||0,callback:i.callback,easing:i.easing||k},y=typeof n=="string"?u.offset+document.querySelector(n).getBoundingClientRect().top:n,E=typeof u.duration=="function"?u.duration(y):u.duration,D,b;requestAnimationFrame(function(l){D=l,T(l)});function T(l){b=l-D,window.scrollTo(0,u.easing(b,A,y,E)),b<E?requestAnimationFrame(T):L()}function L(){window.scrollTo(0,A+y),typeof u.callback=="function"&&u.callback()}function k(l,I,B,_){return l/=_/2,l<1?B/2*l*l+I:(l-=1,-B/2*(l*(l-2)-1)+I)}}t&&x(t,{duration:e,offset:$(".tab-group").length?$("#navigation").css("position")==="static"?($(".tab-group").eq(0).outerHeight(!1)+23)*-1:($("#navigation").outerHeight(!1)+$(".tab-group").eq(0).outerHeight(!1)+23)*-1:$("#navigation").css("position")==="fixed"?($("#navigation").outerHeight(!1)+23)*-1:-23,callback:function(){v(t)}})};$(document).on("click",function(t){if($(".mega-nav-button.active").length&&(!$(t.target).closest(".mega-nav-slide").length||$(t.target).closest(".mega-nav-background").length)&&(!$(t.target).closest(".mega-nav-button-inner").length||$(t.target).closest(".mega-nav-button-inner").length&&$(t.target).closest(".mega-nav-button.active").length)){console.log("Click was outside the mega nav");var e=$(".mega-nav-button.active").find(".mega-nav-slide").attr("id");$(".mega-nav-button.active").removeClass("active");var a=document.querySelector("#"+e);C(a)}else if($(".mega-nav-button.active").length&&!$(t.target).closest(".mega-nav-button.active").length&&$(t.target).closest(".mega-nav-button-inner").length){console.log("Open another mega nav"),$(t.target).closest(".mega-nav-button").addClass("active").siblings().removeClass("active"),$(t.target).closest(".mega-nav-button").find(".mega-nav-image").eq(0).css({opacity:"1"});var e=$(".mega-nav-button.active").find(".mega-nav-slide").attr("id"),a=document.querySelector("#"+e);S(a,{reserveScrollBarGap:!0})}else if(!$(t.target).closest(".mega-nav-button.active").length&&$(t.target).closest(".mega-nav-button-inner").length||!$(t.target).closest(".mega-nav-button.active").length&&$(t.target).closest(".mega-nav-button-inner").length){console.log("Open the mega nav"),$(t.target).closest(".mega-nav-button").addClass("active"),$(t.target).closest(".mega-nav-button").find(".mega-nav-image").eq(0).css({opacity:"1"});var e=$(".mega-nav-button.active").find(".mega-nav-slide").attr("id"),a=document.querySelector("#"+e);S(a,{reserveScrollBarGap:!0})}});N();P();})();

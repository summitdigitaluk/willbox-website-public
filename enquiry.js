"use strict";(()=>{function z(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}else return Array.from(t)}var B=!1;typeof window!="undefined"&&(E={get passive(){B=!0}},window.addEventListener("testPassive",null,E),window.removeEventListener("testPassive",null,E));var E,x=typeof window!="undefined"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),v=[],A=!1,J=-1,h=void 0,f=void 0,w=void 0,_=function(e){return v.some(function(r){return!!(r.options.allowTouchMove&&r.options.allowTouchMove(e))})},I=function(e){var r=e||window.event;return _(r.target)||r.touches.length>1?!0:(r.preventDefault&&r.preventDefault(),!1)},G=function(e){if(w===void 0){var r=!!e&&e.reserveScrollBarGap===!0,a=window.innerWidth-document.documentElement.clientWidth;if(r&&a>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);w=document.body.style.paddingRight,document.body.style.paddingRight=n+a+"px"}}h===void 0&&(h=document.body.style.overflow,document.body.style.overflow="hidden")},V=function(){w!==void 0&&(document.body.style.paddingRight=w,w=void 0),h!==void 0&&(document.body.style.overflow=h,h=void 0)},W=function(){return window.requestAnimationFrame(function(){if(f===void 0){f={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,r=e.scrollY,a=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-r,document.body.style.left=-a,setTimeout(function(){return window.requestAnimationFrame(function(){var o=n-window.innerHeight;o&&r>=n&&(document.body.style.top=-(r+o))})},300)}})},X=function(){if(f!==void 0){var e=-parseInt(document.body.style.top,10),r=-parseInt(document.body.style.left,10);document.body.style.position=f.position,document.body.style.top=f.top,document.body.style.left=f.left,window.scrollTo(r,e),f=void 0}},K=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},j=function(e,r){var a=e.targetTouches[0].clientY-J;return _(e.target)?!1:r&&r.scrollTop===0&&a>0||K(r)&&a<0?I(e):(e.stopPropagation(),!0)},H=function(e,r){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!v.some(function(n){return n.targetElement===e})){var a={targetElement:e,options:r||{}};v=[].concat(z(v),[a]),x?W():G(r),x&&(e.ontouchstart=function(n){n.targetTouches.length===1&&(J=n.targetTouches[0].clientY)},e.ontouchmove=function(n){n.targetTouches.length===1&&j(n,e)},A||(document.addEventListener("touchmove",I,B?{passive:!1}:void 0),A=!0))}};var N=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}v=v.filter(function(r){return r.targetElement!==e}),x&&(e.ontouchstart=null,e.ontouchmove=null,A&&v.length===0&&(document.removeEventListener("touchmove",I,B?{passive:!1}:void 0),A=!1)),x?X():V()};var ee=(t,e="text",r="value")=>c(t)===!1?t.map(n=>({[e]:n,[r]:n})):[],Y=t=>Array.isArray(t)?t.every(e=>typeof e=="string")?"Array of strings":t.every(e=>typeof e=="object"&&e!==null&&!Array.isArray(e))?"Array of objects":"Mixed array or unknown type":"Not an array",T=(t,e,r,a,n=e)=>{$(".select-wrapper--"+e).remove();var o=document.createElement("div");o.classList.add("select-wrapper","select-wrapper--"+e),a&&o.classList.add(...a.split(" "));var s=document.createElement("select");s.id=e,s.name=n,s.classList.add("form-select","w-select");let l;Y(t)==="Array of strings"?l=ee(t):Y(t)==="Array of objects"&&(l=t);for(let m=0;m<l.length;m++){var i=document.createElement("option");i.text=l[m].text,i.value=l[m].value,s.add(i)}var d=document.createElement("div");d.classList.add("select-icon"),$(o).prepend(s).append(d).insertAfter("#"+r)};var c=t=>!Array.isArray(t)||!t.length,P=t=>t instanceof Date&&Object.prototype.toString.call(t)==="[object Date]"&&!isNaN(t.getTime()),te=t=>(t<10&&(t="0"+t),t);var g=(t,e)=>{var r=new Date(t),a=r.getFullYear(),n=te(r.getMonth()+1),o=r.getDate();return e?a+"-"+n+"-"+o:a+""+n+o};var R=()=>{let t=JSON.parse(localStorage.getItem("enquiry"));if(c(t)===!0){$('[data-enquiry="get-a-quote"]').attr("href","/complete-your-enquiry"),$('[data-enquiry="get-a-quote"] .get-a-quote').show().siblings().hide();return}let r=t.reduce((o,s)=>o+parseInt(s.qty,10),0);$('[data-enquiry="total"]').text(r);let a=t.some(o=>o.billing==="hire"),n=t.some(o=>o.billing!=="hire");a&&n?$('[data-enquiry="get-a-quote"]').attr("href","/complete-your-enquiry?reason=NewHireSalesQuote"):a?$('[data-enquiry="get-a-quote"]').attr("href","/complete-your-enquiry?reason=NewHireQuote"):$('[data-enquiry="get-a-quote"]').attr("href","/complete-your-enquiry?reason=NewSalesQuote"),$('[data-enquiry="get-a-quote"] .complete-enquiry').show().siblings().hide()};var re=$(".modal").length<1;$(document).on("change","#billing",function(){var t=$(this).val().toLowerCase();t==="hire"?$("#date-picker").removeClass("hidden"):$("#date-picker").addClass("hidden"),$('[data-enquiry="add-to-enquiry"] .icon-check').length&&$('[data-enquiry="add-to-enquiry"]').html('<span class="button-text icon-add">Add to Enquiry</span>')});$('.increase[data-for="enquiry-ribbon"]').on("click",function(t){t.preventDefault();var e=$(this),r=e.parent(),a=r.siblings(".counter"),n=a.val();if(n>=1&&r.siblings(".interaction-button-wrapper").find(".decrease").prop("disabled",!1).removeAttr("disabled"),n<99){var o=+n+1;a.val(o).trigger("change")}});$('.decrease[data-for="enquiry-ribbon"]').on("click",function(t){t.preventDefault();var e=$(this),r=e.parent(),a=r.siblings(".counter"),n=a.val();if(n>1){n===2&&e.prop("disabled",!0).attr("disabled","");var o=+n-1;a.val(o).trigger("change")}});localStorage.getItem("enquiry")?C=JSON.parse(localStorage.getItem("enquiry")):(C=[],localStorage.setItem("enquiry",JSON.stringify(C)));var C;$(document).on("click",'[data-enquiry="add-to-enquiry-modal"]',function(t){t.preventDefault(),$("#variant-select").addClass("hidden"),$("#date-picker").addClass("hidden"),$('[data-enquiry="add-to-enquiry"] .icon-check').length&&$('[data-enquiry="add-to-enquiry"]').html('<span class="button-text icon-add">Add to Enquiry</span>');var e=$(this),r=e.closest(".content_card"),a=r.find(".product_singular_name")&&r.find(".product_singular_name").text()!==""?r.find(".product_singular_name").text():r.find(".content_card_title").text(),n=r.find('[data-node-type="commerce-add-to-cart-option-select"]').children(),o=r.find(".content_card-image").attr("src"),s=[];$.each(n,function(d){this.value!==""&&s.push(this.text)}),$('[data-enquiry="img"]').html(o),$('[data-enquiry="singular-name"]').html(a),c(s)===!1&&(T(s,"variant","variant-label"),$("#variant-select").removeClass("hidden")),$("#qty").val(1),$('.decrease[data-for="enquiry-ribbon"]').prop("disabled",!0).attr("disabled","");var l=[],i=r.find('[data-enquiry="billing"]');i.each(function(){l.push($(this).text())}),T(l,"billing","billing-label"),l[0]==="Hire"&&$("#date-picker").removeClass("hidden"),ae("add-to-enquiry")});function ae(t){if(document.getElementById(t)){var e=document.getElementById(t);H(e,{reserveScrollBarGap:!0}),e.scroll(0,0);var r=$("#"+t);r.removeClass("closed").addClass("opening").css("display","flex");let a=r.find(".modal-background");a.fadeIn(350),setTimeout(function(){r.removeClass("opening").addClass("open"),$(".loading").removeClass("loading"),a.on("click",function(){p(t)})},350)}}function p(t){if(document.getElementById(t)){var e=$("#"+t);e.removeClass("open").addClass("closing"),e.find(".modal-background").fadeOut(200),setTimeout(function(){e.removeClass("closing").hide().addClass("closed");var r=document.getElementById(t);N(r)},200)}}$(".close-modal").each(function(){$(this).on("click",function(t){t.preventDefault();var e=$(t.target).closest(".modal").attr("id");p(e)})});$(".add-to-enquiry .form-select, .add-to-enquiry .input.counter, .add-to-enquiry .calendar-field").each(function(){$(this).on("change",function(){$('[data-enquiry="add-to-enquiry"] .icon-check').length&&$('[data-enquiry="add-to-enquiry"]').html('<span class="button-text icon-add">Add to Enquiry</span>')})});$('[data-enquiry="add-to-enquiry"]').on("click",function(t){t.preventDefault();var e=!0,r=JSON.parse(localStorage.getItem("enquiry")),a="",n="",o="",s="",l="",i=[],d="";if(a=$('[data-enquiry="singular-name"]').length&&$('[data-enquiry="singular-name"]').text()!==""?$('[data-enquiry="singular-name"]').text():$('[data-enquiry="name"]').text(),n=$("#variant").length&&!$("#variant-select").hasClass("hidden")?$("#variant"):$('.product-sidebar [data-node-type="commerce-add-to-cart-option-select"]').length?$('[data-node-type="commerce-add-to-cart-option-select"]'):null,o=n!==null?o.id==="variant"?n.val():n.children('[value="'+n.val()+'"]').text():"n/a",s=$(".counter").val()>0?$(".counter").val():"1",l=$("#billing").val().toLowerCase(),d=re?$('[data-enquiry="img"]').eq(0).attr("src"):$('[data-enquiry="img"]').text(),i=P($("#hire-start").datepicker("getDate"))&&P($("#hire-end").datepicker("getDate"))?[$("#hire-start").datepicker("getDate"),$("#hire-end").datepicker("getDate")]:[],localStorage.setItem("selectedDates",JSON.stringify(i)),n!==null){if(o===""||o.indexOf("Select")>-1){e=!1,n.siblings(".form-error").length||$('<div class="form-error">Please select a product to add</div>').insertAfter(n),n.trigger("focus");return}n.siblings(".form-error").remove()}if(c(r)===!1){var q=!1;for(let S=0;S<r.length&&!q;S++)if(r[S].billing===l){var u=r[S];for(var k in u)if(u.hasOwnProperty(k)&&k==="id"){var U=u[k],O;if(l==="hire"?O=i[0]&&i[1]?a.toLowerCase().replace(/[^\w]/g,"")+o.toLowerCase().replace(/[^\w]/g,"")+"startdate"+g(i[0])+"enddate"+g(i[1]):a.toLowerCase().replace(/[^\w]/g,"")+o.toLowerCase().replace(/[^\w]/g,"")+"noselecteddates":O=a.toLowerCase().replace(/[^\w]/g,"")+o.toLowerCase().replace(/[^\w]/g,""),U===O)if(l==="hire"){var b=u.selectedDates;let Q=c(b)===!1,M=c(b)===!0,Z=c(i)===!1,F=c(i)===!0;if((Q&&Z||M&&F)&&(M&&F||b[0]===i[0].toISOString()&&b[1]===i[1].toISOString())){q=!0;var L=(parseInt(u.qty,10)+parseInt(s,10)).toString();u.qty=L,localStorage.setItem("enquiry",JSON.stringify(r)),p("add-to-enquiry"),D({name:a,img:d,variant:o})}}else{q=!0;var L=(parseInt(u.qty,10)+parseInt(s,10)).toString();u.qty=L,localStorage.setItem("enquiry",JSON.stringify(r)),p("add-to-enquiry"),D({name:a,img:d,variant:o})}}}if(!q){if(l==="hire")var y={billing:l,id:i[0]&&i[1]?a.toLowerCase().replace(/[^\w]/g,"")+o.toLowerCase().replace(/[^\w]/g,"")+"startdate"+g(i[0])+"enddate"+g(i[1]):a.toLowerCase().replace(/[^\w]/g,"")+o.toLowerCase().replace(/[^\w]/g,"")+"noselecteddates",name:a,img:d,variant:o,qty:s,selectedDates:i[0]&&i[1]?i:[]};else var y={billing:l,id:a.toLowerCase().replace(/[^\w]/g,"")+o.toLowerCase().replace(/[^\w]/g,""),name:a,img:d,variant:o,qty:s};r.push(y),localStorage.setItem("enquiry",JSON.stringify(r)),p("add-to-enquiry"),D({name:a,img:d,variant:o})}}else{if(l==="hire")var y={billing:l,id:i[0]&&i[1]?a.toLowerCase().replace(/[^\w]/g,"")+o.toLowerCase().replace(/[^\w]/g,"")+"startdate"+g(i[0])+"enddate"+g(i[1]):a.toLowerCase().replace(/[^\w]/g,"")+o.toLowerCase().replace(/[^\w]/g,"")+"noselecteddates",name:a,img:d,variant:o,qty:s,selectedDates:i[0]&&i[1]?i:[]};else var y={billing:l,id:a.toLowerCase().replace(/[^\w]/g,"")+o.toLowerCase().replace(/[^\w]/g,""),name:a,img:d,variant:o,qty:s};r.push(y),localStorage.setItem("enquiry",JSON.stringify(r)),p("add-to-enquiry"),D({name:a,img:d,variant:o})}$(this).html('<span class="button-text icon-check">Added</span>'),R()});function D(t){var e=$($("#product-added").eq(0).html()),r=e.find(".product-added-image"),a=e.find(".product-added-title"),n=t.variant!=="n/a"?t.variant+" "+t.name:t.name;a.html(n),r.attr("src",t.img),$("#complete-enquiry").append(e),setTimeout(function(){e.removeClass("hidden")},50),setTimeout(function(){e.addClass("hidden"),setTimeout(function(){e.remove()},350)},5e3)}$("#filter-fleet-list").on("click",function(t){t.preventDefault(),$("#filter-column").fadeIn(200);var e=document.querySelector("#filter-column");H(e),e.scroll(0,0)});$("#filter-column-close").on("click",function(t){t.preventDefault(),$("#filter-column").fadeOut(200),setTimeout(function(){var e=document.querySelector("#filter-column");N(e)},200)});})();
